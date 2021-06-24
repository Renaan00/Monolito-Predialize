import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable()
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) {}

  getAll() {}

  getById() {}

  getByName() {}

  getGeneralTotals() {}

  getTotalsByCompany() {}
}
