const AWS = require('aws-sdk');

AWS.config.update({ region: 'eu-west-2' });

ec2 = new AWS.EC2;

var params = {
  InstanceIds: [process.argv[3]],
  DryRun: true
};

if (process.argv[2].toUpperCase() === "START") {
  ec2.startInstances(params, (err, data) => {
    if (err && err.code === 'DryRunOperation') {
      params.DryRun = false;
      ec2.startInstances(params, (err, data) => {
        if (err) {
          console.log("Error", err);
        } else if (data) {
          console.log("Success", data.StartingInstances);
        }
      });
    } else {
      console.log("AWS says NOPE! Permission denied to start instances");
    } 
  });
} else if (process.argv[2].toUpperCase() === "STOP") {
    ec2.startInstances(params, (err, data) => {
      if (err && err.code === 'DryRunOperation') {
        params.DryRun = false;
        ec2.stopInstances(params, (err, data) => {
          if (err) {
            console.log("Error", err);
          } else if (data) {
            console.log("Success", data.StoppingInstances);
          }
        });
      } else {
        console.log("AWS says NOPE! Permission denied to start instances");
      } 
    });
}