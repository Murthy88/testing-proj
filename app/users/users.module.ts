import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../header/header.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { UserPipe } from './pipe/user.pipe';
import { SortDirective } from './direactive/sort.directive';


@NgModule({
  declarations: [
    UsersComponent,
    UserPipe,
    SortDirective

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HeaderModule,
    FormsModule,ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [ ]
})
export class UsersModule { }
