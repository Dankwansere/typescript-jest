import {of, Observable, timer} from 'rxjs'
import {audit} from 'rxjs/operators';
export class AuditTest {
    constructor() {}

    public testAudit(arr: Array<number>): Observable<any> {
        return of(...arr).pipe(
            audit(x => {
                console.log('aduit operator received value: ', x);
                return this.delayedMethod();
                //return timer(50);
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