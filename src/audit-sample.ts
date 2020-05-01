import {of, Observable, timer, interval} from 'rxjs'
import {audit, take} from 'rxjs/operators';
export class AuditTest {
    constructor() {}

    public testAudit(): Observable<any> {
        const source = interval(100);
        return source.pipe(
            take(20),
            audit(x => {
                console.log('aduit operator received value: ', x);
                
            return timer(500);
            })
        )
    }

    public delayedMethod(): Observable<any> {

        return of(setTimeout(()=> {
            console.log('timeout finished');
        }, 1000000));
        
    }
    

    public sampleTest(): string {
        return 'hello world'
    }
}
const audit2 = new AuditTest();
audit2.testAudit().subscribe(x => {
    console.log('value from subscribe source: ', x);
})