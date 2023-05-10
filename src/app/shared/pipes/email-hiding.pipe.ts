import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailHiding'
})
export class EmailHidingPipe implements PipeTransform {
  transform(email: string): string {
    const splitEmail = email.split('@');
    const emailFirstPart = splitEmail[0];
    let formattedEmail = '';
    emailFirstPart.split('').forEach((ch,index)=>{
      if(emailFirstPart.length-2 <= index || index <= 2) {
          formattedEmail += ch;
      }else{
        formattedEmail += '*';
      }
    })
    return formattedEmail+'@'+splitEmail[1];
  }
}
