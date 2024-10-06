import { inject, Injectable } from "@angular/core";
import { GroupRepository } from "../domain/group.repository";
import { Observable } from "rxjs";
import { Group } from "../core/interfaces/group.interface";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environment/environments";
import { CreateGroupBody } from "../core/interfaces/create-group.interface";
import { CreateGroupResponse, Tokens } from "../core/interfaces/create-group.interface";
import { SearchGroupBody } from "../core/interfaces/search-group.interface";
import { TokensService } from "../core/services/tokens.service";

@Injectable()
export class GroupHttp extends GroupRepository {
private readonly http: HttpClient = inject(HttpClient);
private readonly tokenService: TokensService = inject(TokensService);
url = `${environment.api}`;

  createGroup(createGroupBody: CreateGroupBody): Observable<CreateGroupResponse> {
    return this.http.post<CreateGroupResponse>(`${this.url}/auth/sign-up`, createGroupBody);
  }

  searchGroup(searchGroupBody: SearchGroupBody): Observable<Tokens> {
    return this.http.post<Tokens>(`${this.url}/auth/sign-in`, searchGroupBody)
  }

  getGroup(): Observable<Group[]> {
    //const token = this.tokenService.currentToken;
    //console.log('Token:', token);
    return this.http.get<Group[]>(`${this.url}/answer`, {
      headers: {
        'Authorization': `Bearer ${this.tokenService.accessToken}`
      }
    });
  }

}

