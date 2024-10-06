import { Injectable, inject } from '@angular/core';
import { GroupRepository } from '../domain/group.repository';
import { CreateGroupBody } from '../core/interfaces/create-group.interface';
import { SearchGroupBody } from '../core/interfaces/search-group.interface';

@Injectable()
export class GroupFacade {

  group = inject(GroupRepository);


  createGroup(createGroupBody: CreateGroupBody) {
    return this.group.createGroup(createGroupBody);
  }

  searchGroup(searchGroupBody: SearchGroupBody) {
    return this.group.searchGroup(searchGroupBody);
  }

  getGroup() {
    return this.group.getGroup();
  }
}
