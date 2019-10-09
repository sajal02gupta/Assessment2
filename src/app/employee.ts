export class Employee{
    eName: String;
    eDob: String;
    eAdd: String;
    ePhone: number;
    eDegree: String;
    eMarks: number;
    eStream: String;
    eCollege: String;
    eId: number;

    constructor(eId, eName,eDob, eAdd, ePhone, eDegree, eMarks, eStream,eCollege ){
        this.eId=eId;
        this.eName=eName;
        this.eDob=eDob;
        this.eAdd=eAdd;
        this.ePhone=ePhone;
        this.eDegree=eDegree;
        this.eMarks=eMarks;
        this.eStream= eStream;
        this.eCollege=eCollege;
    }
}