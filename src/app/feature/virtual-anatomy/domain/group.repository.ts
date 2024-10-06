import { Observable } from "rxjs";
import { Group } from "../core/interfaces/group.interface";
import { CreateGroupBody } from "../core/interfaces/create-group.interface";
import { CreateGroupResponse, Tokens } from "../core/interfaces/create-group.interface";
import { SearchGroupBody } from "../core/interfaces/search-group.interface";

export abstract class GroupRepository {
  abstract createGroup(createGroupBody: CreateGroupBody): Observable<CreateGroupResponse>;
  abstract searchGroup(SearchGroupBody: SearchGroupBody): Observable<Tokens>;
  abstract getGroup(): Observable<Group[]>;
}
