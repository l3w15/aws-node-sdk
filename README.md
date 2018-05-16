# Playing with AWS and Node.js
So far there are two files; one to check the state of an existing EC2 instance and one to either start or stop an instance.

To run the file:
First set up an AWS account and launch an EC2 instance and take a note of the instance ID. You can get help with this here <a href="https://aws.amazon.com/documentation/ec2/">EC2 docs<a>. Then: 
```
$ git clone https://github.com/l3w15/aws-node-sdk.git
$ npm install
```
You can insert your AWS secret key, access key and region into a config.json file, or save them in ~/.aws/credentials (MacOS and Linux). You should then be able to use commands such as below:
```diff
$ node ec2_get_instance_state.js your_EC2_instance_ID
 // Success. State:  stopped

$ node ec2_start_stop_instances.js start your_EC2_instance_ID
 // Success [ { CurrentState: { Code: 0, Name: 'pending' },
 //    InstanceId: 'your_EC2_instance_ID',
 //    PreviousState: { Code: 80, Name: 'stopped' } } ]

$ node ec2_get_instance_state.js your_EC2_instance_ID
 // Success. State:  running

$ node ec2_start_stop_instances.js stop your_EC2_instance_ID
 // Success [ { CurrentState: { Code: 64, Name: 'stopping' },
 //    InstanceId: 'your_EC2_instance_ID',
 //    PreviousState: { Code: 16, Name: 'running' } } ]

$ node ec2_get_instance_state.js your_EC2_instance_ID
 // Success. State:  stopping

$ node ec2_get_instance_state.js your_EC2_instance_ID
+ // Success. State:  stopped
```

