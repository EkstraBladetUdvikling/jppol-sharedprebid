/**
 * Helper: initializeTracking
 * creating google analytics object to add the tracking to
 */

export class PrebidAnalytics {
  private reCheckCount: number = 0;
  private reCheckInterval: any;

  constructor(
    trackingSampling: boolean = true,
    trackingDistribution: boolean = false
  ) {
    this.initializeTracking(trackingSampling, trackingDistribution);
  }

  private initializeTracking(
    trackingSampling: boolean = true,
    trackingDistribution: boolean = false
  ) {
    try {
      console.log(
        `PrebidAnalytics arguments: trackingSampling ${trackingSampling} | trackingDistribution ${trackingDistribution}`
      );
      const win = window as any;
      const ga = win.ga;
      const pbjs = win.pbjs;

      this.reCheckInterval = setInterval(() => {
        this.reCheckCount++;
        let prebidTrackerName = '';
        clearInterval(this.reCheckInterval);
        if (typeof ga !== 'undefined' && typeof ga.getAll !== 'undefined') {
          const trackers = ga.getAll();
          console.log(`PrebidAnalytics: custom ga ${ga.getAll()}`);
          for (const tracker of trackers) {
            const trackerName =
              tracker.get('name') === '' ? '(unnamed)' : tracker.get('name');
            if (
              tracker.get('trackingId') === 'UA-2135460-1' ||
              tracker.get('trackingId') === 'UA-2135460-47'
            ) {
              prebidTrackerName = trackerName;
            }
          }
          console.log(
            `PrebidAnalytics custom ga, ready for tracking ${prebidTrackerName}`
          );
          if (prebidTrackerName !== '') {
            console.log('PrebidAnalytics custom ga, ready for tracking');
            pbjs.que.push(() => {
              // Sampling set to 5%
              const sampling = trackingSampling ? 0.05 : 1;
              const analyticsObject = [
                {
                  options: {
                    enableDistribution: trackingDistribution,
                    sampling,
                    trackerName: prebidTrackerName
                  },
                  provider: 'ga'
                }
              ];

              pbjs.enableAnalytics(analyticsObject);
            });
          }
        } else if (this.reCheckCount === 10) {
          clearInterval(this.reCheckInterval);
          throw new Error('Prebid Analytics Checked 10 times with no luck');
        }
      }, 500);
    } catch (err) {
      console.error(`PrebidAnalytics ${err}`);
    }
  }
}

// function initializeTracking(
//   trackingSampling = true,
//   trackingDistribution = false
// ) {
//   try {
//     console.log(
//       "custom GA what is up?",
//       trackingSampling,
//       trackingDistribution
//     );
//     reRunCount++;

//     let prebidTrackerName = "";
//     if (
//       typeof (window as any).ga !== "undefined" &&
//       typeof (window as any).ga.getAll !== "undefined"
//     ) {
//       const trackers = (window as any).ga.getAll();
//       console.log("custom ga", (window as any).ga.getAll());
//       for (const tracker of trackers) {
//         const trackerName =
//           tracker.get("name") === "" ? "(unnamed)" : tracker.get("name");
//         if (
//           tracker.get("trackingId") === "UA-2135460-1" ||
//           tracker.get("trackingId") === "UA-2135460-47"
//         ) {
//           prebidTrackerName = trackerName;
//         }
//       }
//       console.log("custom ga, ready for tracking", prebidTrackerName);
//       if (prebidTrackerName !== "") {
//         console.log("custom ga, ready for tracking");
//         pbjs.que.push(() => {
//           // Sampling set to 5%
//           const sampling = trackingSampling ? 0.05 : 1;
//           const analyticsObject = [
//             {
//               options: {
//                 enableDistribution: trackingDistribution,
//                 sampling,
//                 trackerName: prebidTrackerName
//               },
//               provider: "ga"
//             }
//           ];

//           pbjs.enableAnalytics(analyticsObject);
//         });
//       }
//     } else if (reRunCount < 10) {
//       setTimeout(() => initializeTracking(trackingSampling), 500);
//     } else {
//       throw new Error("checked 10 times");
//     }
//   } catch (err) {
//     console.error("initializeTracking", err);
//   }
// }
