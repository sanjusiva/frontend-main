import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Material } from '../shared/material.model';
import { MaterialService } from '../shared/material.service';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  providers: [MaterialService]
})
export class MaterialComponent implements OnInit {

  materialForm: FormGroup | any;
  materials: Material[] = [];
  material: string = '';
  constructor(public materialService: MaterialService,
    public router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.materialForm = this.fb.group({
      domain: new FormControl('', [Validators.required]),
      courseId: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,5}")]),
      link1: new FormControl('', [Validators.required]),
      link2: new FormControl('', [Validators.required]),
      link3: new FormControl('', [Validators.required]),
      video1: new FormControl('', [Validators.required]),
      video2: new FormControl('', [Validators.required]),
      video3: new FormControl('', [Validators.required]),
      cost: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{2,5}")]),
      image: new FormControl('', [Validators.required])
    })
  }
  ngOnInit(): void {
    this.refreshEmployeeList();
    this.route.paramMap.subscribe(params => {
      var id = params.get('id');
      this.materialService.setMatId = id;
      this.onEdit(id);
    });
  }

  get domain() {
    return this.materialForm.get('domain');
  } get courseId() {
    return this.materialForm.get('courseId');
  }
  get link1() {
    return this.materialForm.get('link1');
  } get link2() {
    return this.materialForm.get('link2');
  } get link3() {
    return this.materialForm.get('link3');
  } get video1() {
    return this.materialForm.get('video1');
  } get video2() {
    return this.materialForm.get('video2');
  } get video3() {
    return this.materialForm.get('video3');
  } get cost() {
    return this.materialForm.get('cost');
  } get image() {
    return this.materialForm.get('image');
  }


  onSubmit(form: NgForm) {
    if (!this.materialService.getMatId) {
      this.materialService.postMaterial(form.value).subscribe((res) => {
        alert(Object.values(res)[0]);
        this.router.navigate(['/table']);
      });
    }
    else {
      this.materialService.putMaterial(form.value).subscribe((res) => {
        alert(Object.values(res)[0])
        this.router.navigate(['/table']);

      });
    }
  }

  onEdit(id: any) {
    this.materialService.getMaterialList();
    if (this.materialService.getMatId != null) {
      this.materialService.getThatMat(id).subscribe(
        (res: any) => this.editMaterial(res),
        (err: any) => console.log(err)
      );
    }
  }
  editMaterial(material: Material) {
    this.materialForm.patchValue({
      domain: Object.values(material)[0][0].domain,
      courseId: Object.values(material)[0][0].courseId,
      link1: Object.values(material)[0][0].link1,
      link2: Object.values(material)[0][0].link2,
      link3: Object.values(material)[0][0].link3,
      video1: Object.values(material)[0][0].video1,
      video2: Object.values(material)[0][0].video2,
      video3: Object.values(material)[0][0].video3,
      cost: Object.values(material)[0][0].cost,
      image: Object.values(material)[0][0].image
    })
  }

  resetValues() {
    this.materialForm.reset();
  }

  refreshEmployeeList() {
    this.materialService.getMaterialList().subscribe((res) => {
      this.materials = res as Material[];
    });
  }


}
