function encodeEIDs(eids) {
  const result = {};

  for (let i = 0; i < eids.length; i++) {
    const eid = eids[i];
    const source = String(eid.source);
    const uids = eid.uids;

    result[source] = result[source] || {};

    for (let j = 0; j < uids.length; j++) {
      const uid = uids[j];

      const id = String(uid.id);

      result[source][id] = result[source][id] || [];

      result[source][id].push(parseInt(uid.atype, 10));
    }
  }

  return btoa(JSON.stringify(result));
}
