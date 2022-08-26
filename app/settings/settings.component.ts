import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
// import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SettingsService } from '../core/_services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  closeResult: string = '';
  save:boolean=false;
  add2:boolean=false;
  settingCoraId!: number;
  UserCoraId: any;
  tempData: any
  settingForm=this.formBuilder.group({
    tracking:['',Validators.required],
    include:['',Validators.required],
    sequence:['',Validators.required],
    dependencies:['',Validators.required],
    notification:['',Validators.required],
    within:['',Validators.required],
    type:['',Validators.required],
    evidence:['',Validators.required],
    status:['',Validators.required]
  })
  FormSubmitted: boolean | undefined;
  status: any;
  notification: any;
  setting: any;
  // = [
  //   {
  //     trackingSteps: 'Post-Delivery Inspection',
  //     Include: 'yes',
  //     Sequence: '1',
  //     dependencies: 'Temp Tag',
  //     notifications: 'sales person',
  //     within: '2 days',
  //     type: 'automatic',
  //     dmsEvidence:
  //       'Generally The Deal Date – There Should Be A Service Record For The PDI (Post-Delivery, Not Pre-Delivery)',
  //     status: 'Active',
  //   },
  //   {
  //     trackingSteps: 'pre-Delivery Inspection',
  //     Include: 'yes',
  //     Sequence: '2',
  //     dependencies: 'Temp Tag',
  //     notifications: 'sales person',
  //     within: '5 days',
  //     type: 'automatic',
  //     dmsEvidence:
  //       'Generally The Deal Date – There Should Be A Service Record For The PDI (Post-Delivery, Not Pre-Delivery)',
  //     status: 'Active',
  //   },
  //   {
  //     trackingSteps: 'pre-Delivery ',
  //     Include: 'no',
  //     Sequence: '3',
  //     dependencies: 'Temp Tag',
  //     notifications: 'controller',
  //     within: '7 days',
  //     type: 'manual',
  //     dmsEvidence:
  //       'Generally The Deal Date – There Should Be A Service Record For The PDI (Post-Delivery, Not Pre-Delivery)',
  //     status: 'In Active',
  //   },
  // ];


  constructor(
    // private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private service: SettingsService,
    private settingservice :SettingsService
  ) {}

  ngOnInit(): void {
    // this.settingCoraId = 1;
    // this.getSettings(this.settingCoraId);
    // this.settingForm = new FormGroup({
    //   trackingSteps: new FormControl(),
    //   inlineRadioOptions: new FormControl(),
    //   sequence: new FormControl(),
    //   dependencies: new FormControl(),
    //   notifications: new FormControl(),
    //   within: new FormControl(),
    //   type: new FormControl(),
    //   dmsEvidence: new FormControl(),
    // });
    this.UserCoraId=localStorage.getItem('UserCoraId')
    this.settingservice.GetSettingsView(this.UserCoraId)
    .subscribe((res:any)=>{
      console.log('SettingData',res);
      this.tempData=res

    })
  }

  getSettings(id: number) {
    let token = localStorage.getItem('UserToken');
  }


  //add
  addSetting() {

      const obj={
      "action": "A",
      "sId": 0,
      "sCoraAcctId": 1,
      "sTrackingsteps":this.settingForm.value. tracking,
      "sInclude": this.settingForm.value. include,
      "sSequence": this.settingForm.value. sequence,
      "sDependencies":this.settingForm.value. dependencies ,
      "sNotifications": this.settingForm.value. notification,
      "sWithin": this.settingForm.value. within,
      "sType": this.settingForm.value. type,
      "sDmsevidence": this.settingForm.value.evidence,
      "sStatus":this.settingForm.value. status ,
      "err_no": 0
      }
      console.log(obj)
      this.service.addsettings(obj).subscribe((res:any)=>{
        console.log("add setting",res)

        this.ngOnInit();
        alert(" add sucessfully")
      })

  }


  //edit
  EditRow(res:any) {
    this.add2=false;
    this.save=true;
    console.log(res)
  this.settingForm=new FormGroup({
    tracking:new FormControl(res['sTrackingsteps']),
    include:new FormControl(res['sInclude']),
    sequence:new FormControl(res['sSequence']),
    dependencies:new FormControl(res['sDependencies']),
    notification:new FormControl(res['sNotifications']),
    within:new FormControl(res['sWithin']),
    type:new FormControl(res['sType']),
    evidence:new FormControl(res['sDmsevidence']),
    status:new FormControl(res['sStatus']),
  })
  this.setting=res;
  }


  //update
  update(id:any){
    const obj={
      "action": "U",
      "sId": id,
      "sCoraAcctId": 1,
      "sTrackingsteps":this.settingForm.value. tracking,
      "sInclude": this.settingForm.value. include,
      "sSequence": this.settingForm.value. sequence,
      "sDependencies":this.settingForm.value. dependencies ,
      "sNotifications": this.settingForm.value. notification,
      "sWithin": this.settingForm.value. within,
      "sType": this.settingForm.value. type,
      "sDmsevidence": this.settingForm.value.evidence,
      "sStatus":this.settingForm.value. status ,
      "err_no": 0
    }
    console.log(obj)
    this.service.addsettings(obj).subscribe((res:any)=>{
      console.log("updated record",res);
      this.ngOnInit();
      alert('updated sucessfully')
    })
  }
  DeleteRow() {}
  open(content: any) {
    // this.modalService.open(content)
  }
  close() {
    // this.modalService.dismissAll();
  }
  change(data:any){
this.status=data.target.value
  }
  change1(data:any){
    this.notification=data.target.value
  }
  adduser(){
    this.add2=true;
    this.save=false;
    this.settingForm.reset();

  }
}

