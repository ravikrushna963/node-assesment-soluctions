function parsePromised(json) {
  return new Promise(function (fulfill, reject) {
      try {
          fulfill(JSON.parse(json));
      } catch (err) {
          reject(err);
      }
  });
}

function onReject(err) {
  console.log(err.message);
}

parsePromised(process.argv[2]).then(null, onReject);