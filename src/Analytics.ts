/**
 * Helper: initializeTracking
 * creating google analytics object to add the tracking to
 */

/*
eb
tracker.get('trackingId') === 'UA-2135460-1' ||
tracker.get('trackingId') === 'UA-2135460-47'
*/

export interface ITrackingOptions {
  distribution?: boolean;
  id: string;
  sampling?: boolean;
}

export class PrebidAnalytics {
  private reCheckCount: number = 0;
  private reCheckInterval: any;

  constructor(trackingOptions: ITrackingOptions) {
    const trackingDefaults = {
      distribution: false,
      sampling: true,
    };
    const options = { ...trackingDefaults, ...trackingOptions };
    this.initializeTracking(options);
  }

  private initializeTracking(options) {
    try {
      console.log(
        `prebid: PrebidAnalytics arguments: trackingSampling ${options.sampling} | trackingDistribution ${options.distribution}`
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
          console.log(`prebid: PrebidAnalytics: custom ga ${ga.getAll()}`);
          for (const tracker of trackers) {
            const trackerName =
              tracker.get('name') === '' ? '(unnamed)' : tracker.get('name');
            if (tracker.get('trackingId') === options.id) {
              prebidTrackerName = trackerName;
            }
          }
          console.log(
            `prebid: PrebidAnalytics custom ga, ready for tracking ${prebidTrackerName}`
          );
          if (prebidTrackerName !== '') {
            console.log(
              'prebid: PrebidAnalytics custom ga, ready for tracking'
            );
            pbjs.que.push(() => {
              // Sampling set to 5%
              const sampling = options.sampling ? 0.05 : 1;
              const analyticsObject = [
                {
                  options: {
                    enableDistribution: options.distribution,
                    sampling,
                    trackerName: prebidTrackerName,
                  },
                  provider: 'ga',
                },
              ];

              pbjs.enableAnalytics(analyticsObject);
            });
          }
        } else if (this.reCheckCount === 10) {
          clearInterval(this.reCheckInterval);
          throw new Error('Prebid Analytics Checked 10 times with no luck');
        }
      }, 300);
    } catch (err) {
      console.error(`PrebidAnalytics ${err}`);
    }
  }
}
