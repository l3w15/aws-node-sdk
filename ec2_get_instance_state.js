
const AWS = require('aws-sdk');
// set the region
AWS.config.update({ region: 'eu-west-2' });

// Create EC2 service object
ec2 = new AWS.EC2;

let params = {
  InstanceIds: [process.argv[2]]
};

// Call EC2 to retrieve the policy for selected bucket
ec2.describeInstances(params, (err, data) => {
  if (err) {
    console.log("Error", err.stack);
  } else {
    let state = data.Reservations[0].Instances[0].State.Name
    console.log("Success. State: ", state);
    stateCheck(state);
  } 
});

const stateCheck = function(state) {
  return state;
}



