import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { AgePipe } from './../age.pipe';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})

export class MembersComponent implements OnInit {
  @Input() childMemberList: Member[];
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private memberService: MemberService) {}

  ngOnInit(){
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  };

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu
  }

  filterByAge: string = "allMembers";
}
