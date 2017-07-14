import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css'],
  providers: [MemberService]
})
export class MemberDetailComponent implements OnInit {
  memberId: string;
  memberToDisplay: Member;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
     this.memberId = urlParametersArray['id'];
   });
   this.memberService.getMemberById(this.memberId).subscribe(dataLastEmittedFromObserver => {
     this.memberToDisplay = new Member(dataLastEmittedFromObserver.first,
                                      dataLastEmittedFromObserver.last,
                                      dataLastEmittedFromObserver.age,
                                      dataLastEmittedFromObserver.characters)
   })
  }

}
