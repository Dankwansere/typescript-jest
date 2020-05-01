import {AuditTest} from './audit-sample';


describe('#testAduit', ()=> {
    test(`should return array of numbers + 2`, done => {
        let arr = [1,2,3,4,5,6,7];
        const auditTest = new AuditTest();
        auditTest.testAudit(arr).subscribe(x => {
            console.log('subscribe value: ', x); 
            done();
        })
    }, 30000);
});

describe('#helloWorld', ()=> {
    test(`should return message 'hello world`, ()=> {
        const auditTest = new AuditTest();
        const result = auditTest.sampleTest();

        expect(result).toBe('hello world');
    });
});