import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { emailMatcher } from "../shared/validators/confirm-password.validator";

@Component({
  selector: "ver-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.css"],
})
export class ReactiveFormComponent implements OnInit {
  registration: FormGroup;
  isFormSubmitted = false;
  addIcon = "../../assets/icons/plus-circle.svg";
  deleteIcon = "../../assets/icons/x-circle.svg";

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registration = this.fb.group({
      username: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      passwords: this.fb.group(
        {
          password: [
            "",
            [
              Validators.required,
              Validators.pattern("^[a-zA-Z0-9_@]*$"),
              Validators.minLength(6),
            ],
          ],
          confirmPassword: ["", [Validators.required]],
        },
        {
          validators: emailMatcher,
        }
      ),
      skills: this.fb.array([]),
    });
    this.skillsFormGroup();
  }

  skillsFormGroup() {
    const skillGroup = this.fb.group({
      technology: ["", [Validators.required, Validators.minLength(3)]],
      level: ["", [Validators.required, Validators.minLength(3)]],
    });
    const skillsformArray = this.registration.get("skills") as FormArray;
    skillsformArray.push(skillGroup);
  }

  get un() {
    return this.registration.get("username");
  }
  get ps() {
    return this.registration.get("passwords")["controls"].password;
  }
  get cfps() {
    return this.registration.get("passwords")["controls"].confirmPassword;
  }
  get skills(): FormArray {
    return this.registration.get("skills") as FormArray;
  }

  usernameValidation() {
    const errors = this.un.errors;
    if (errors.required) {
      return "please fill username";
    }
    if (errors.minlength) {
      return "minimum 4 characters required";
    }
    if (errors.maxlength) {
      return "maximun 10 characters only allowed";
    }
    return null;
  }

  passwordValidation() {
    const errors = this.ps.errors;
    if (errors.required) {
      return "please fill password";
    }
    if (errors.pattern) {
      return "pattern not matching, special characters not allowed except underscore";
    }
    if (errors.minlength) {
      return "minimum 6 characters required";
    }
  }

  confirmPasswordValidation() {
    const errors =
      this.registration.get("passwords")["controls"].confirmPassword.errors;
    if (errors.required) {
      return "please fill confirm password";
    }
    if (errors.passwordMismatch) {
      return "password is not matching";
    }
    if (errors.minlength) {
      return "minimum 2 characters required";
    }
  }

  technologyValidation(i: number) {
    const skillGroup = this.skills.controls[i] as FormGroup;
    const errors = skillGroup.controls['technology'].errors;
    for(let key in errors){
      if(key){
        return this.errorMessages[key]
      }
    }
    return null;
  }

  levelValidation(i:number){
    const skillGroup = this.skills.controls[i] as FormGroup;
    const errors = skillGroup.controls['level'].errors;
    for(let key in errors){
      if(key){
        return this.errorMessages[key]
      }
    }
    return null;
  }

  errorMessages = {
    required:'Field is required to fill',
    minlength:'minimum 2 characters required'
  }

  addNewSkill() {
    this.skillsFormGroup();
  }

  deleteExistingSkill(i) {
    this.skills.removeAt(i);
  }

  onSubmit() {
    this.isFormSubmitted = true;
  }
}
