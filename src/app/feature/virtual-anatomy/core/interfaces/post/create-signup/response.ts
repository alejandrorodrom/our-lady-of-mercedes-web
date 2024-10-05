export interface CreateGroupResponse {
  serialGroup: string;
  tokens: Tokens;
};

export interface Tokens {
  access: string;
  refresh: string;
};
