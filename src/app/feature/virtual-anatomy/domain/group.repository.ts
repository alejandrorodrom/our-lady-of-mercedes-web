import { Observable } from "rxjs";
import { Group } from "../core/interfaces/get/get-all/student";
import { CreateGroupBody } from "../core/interfaces/post/create-signup/body";
import { CreateGroupResponse, Tokens } from "../core/interfaces/post/create-signup/response";
import { SearchGroupBody } from "../core/interfaces/post/search-signin/body";

export abstract class GroupRepository {
  abstract createGroup(createGroupBody: CreateGroupBody): Observable<CreateGroupResponse>;
  abstract searchGroup(SearchGroupBody: SearchGroupBody): Observable<Tokens>;
  abstract getGroup(): Observable<Group>;
}
