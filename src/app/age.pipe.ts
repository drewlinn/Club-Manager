import { Pipe, PipeTransform, EventEmitter } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {

  transform(input: Member[], desiredAge)  {
    var output: Member[] = [];
    if (desiredAge === "allMembers") {
      for (var i = 0; i < input.length; i++) {
        output.push(input[i]);
      }
      return output;
    } else if (desiredAge === "under25") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 25) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAge === "25andOver") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 25)  {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
