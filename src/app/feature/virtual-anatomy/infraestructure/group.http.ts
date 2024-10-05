import { inject, Injectable } from "@angular/core";
import { GroupRepository } from "../domain/group.repository";
import { Observable } from "rxjs";
import { Group } from "../core/interfaces/get/get-all/student";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environment/environments";
import { CreateGroupBody } from "../core/interfaces/post/create-signup/body";
import { CreateGroupResponse, Tokens } from "../core/interfaces/post/create-signup/response";
import { SearchGroupBody } from "../core/interfaces/post/search-signin/body";

@Injectable()
export class GroupHttp extends GroupRepository {
private readonly http: HttpClient = inject(HttpClient);
url = `${environment.api}`;

  createGroup(createGroupBody: CreateGroupBody): Observable<CreateGroupResponse> {
    return this.http.post<CreateGroupResponse>(`${this.url}auth/sign-up`, createGroupBody);
  }

  searchGroup(searchGroupBody: SearchGroupBody): Observable<Tokens> {
    return this.http.post<Tokens>(`${this.url}`, searchGroupBody)
  }

  getGroup(): Observable<Group> {
    return this.http.get<Group>(`${this.url}`);
  }

}

