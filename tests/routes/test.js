// Import the dependencies for testing
var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../../app');

// Configure chai
chai.use(chaiHttp);
chai.should();


describe("Ac", () => {
    describe("GET Sensor Data /", () => {
        // Test to get all device record
        it("should get all device record", (done) => {
             chai.request(app)
                 .get('/sensor')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });

    describe("GET Sensor Data /", () => {
        // Test to get all device record
        it("should get all device record", (done) => {
             chai.request(app)
                 .get('/ac')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                });
         });
    });

    describe("POST Sensor Data /", () => {
        // Test to get all device record
        it("should get all device record", (done) => {
             chai.request(app)
                 .post('/ac')
                 .set('content-type', 'application/json')
                 .send({
                    "deviceName": "Dining Room",
                    "deviceId": "1",
                    "devicePower": "true",
                    "powerfulOn": "true",
                    "quietOn": "true",
                    "swingH": "true",
                    "swingV": "true",
                    "targetTemp": "24",
                    "fanSpeed": "2",    
                    "temperature": "23.2",
                    "humidity": "65.3"
                })
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                });
         });
    });
});