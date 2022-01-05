const {app} = require("../../app");
const service = require("../../services/mysql.service");
const chai = require("chai");
const sinon = require("sinon");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
chai.should();
const mockMysql = sinon.mock(require('mysql2'));

describe("pesonaController", () => {
    afterEach(() => {
        sinon.restore();
    });
    it("obtenerPersonas",(done)=>{ 
        mockMysql.expects('createConnection').returns({
            connect: () => {
              console.log('Succesfully connected');
            },
            query: (query, vars, callback) => {
                Promise.resolve([])
                done();
            },
            end: () => {
              console.log('Connection ended');
            }
          });
        chai.request(app)
            .get('/obtenerPersonas')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    })
})