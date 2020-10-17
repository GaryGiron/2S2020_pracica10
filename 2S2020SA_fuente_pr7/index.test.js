var chai = require('chai'), chaiHttp = require('chai-http');
chai.use(chaiHttp);
var app = 'localhost:3400';
var expect  = require("chai").expect;
var request = require('superagent');

/*describe("Sample Unit Testing 1", function() {
    describe("Data of  new user", function() {
        it("get The new User", function(done) {
            // Send some Form Data
             chai.request(app)
            .post('/new_pedido')
            .send({
            valor: '{"cliente":222,"status": "Creado","orden": "comida"}'
            })
            .end(function (err, res) {
                expect(res.EmpId).to.equal("creado");               
                done();
            });
        });
    });
});*/

describe("Prueba Unitaria 1", function() {
    it("Creacion de un pedido", function(done) {
        request.post('localhost:3400/new_pedido')
        .set('Content-Type', 'application/json')
        .send('{"cliente":222,"status": "Creado","orden": "comida"}')
        .end(function(err,res){
            //your code to Test
            expect(res.text).to.equal("creado"); 
            expect(res.status).to.equal(200); 
            done();
        })
    });        
});

describe("Prueba Unitaria 2", function() {
    it("Pedir status al repartidor", function(done) {
        request.get('localhost:3400/repartidor_sts')
        .set('Content-Type', 'application/json')
        .end(function(err,res){
            //your code to Test
            expect(res.text).to.equal(""); 
            expect(res.status).to.equal(200); 
            done();
        })
    });        
});

describe("Prueba Unitaria 3", function() {
    it("Pedir status al restaurante", function(done) {
        request.get('localhost:3400/rest_sts')
        .set('Content-Type', 'application/json')
        .end(function(err,res){
            //your code to Test
            expect(res.text).to.equal(""); 
            expect(res.status).to.equal(200); 
            done();
        })
    });        
});

/*describe("Sample Unit Testing 4", function() {
    describe("Completar pedido", function() {
        it("get status complete", function(done) {
            // Send some Form Data
             chai.request(app)
            .post('/completado')
            .send({
            valor: 'Completado'
            })
            .end(function (err, res) {
                expect(res.EmpId).to.equal("Completado");               
                done();
            });
        });

    });
});*/

describe("Prueba Unitaria 4", function() {
    it("Completar pedido", function(done) {
        request.post('localhost:3400/completado')
        .set('Content-Type', 'application/json')
        .send('{"status": "Entregado"}')
        .end(function(err,res){
            //your code to Test
            expect(res.text).to.equal(""); 
            expect(res.status).to.equal(200); 
            done();
        })
    });        
});
