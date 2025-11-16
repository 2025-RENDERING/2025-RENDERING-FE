export interface GuestbookEntry {
  id: number;
  author: string;
  message: string;
  createdAt: string;
}

export interface GuestbookPageResponse {
  content: GuestbookEntry[];
  totalPages: number;
  totalElements: number;
}


export interface GuestbookListApiResponse {
  status: number;
  code: string;
  message: string;
  data: {
    content: GuestbookItemResponse[];
    pageable: PageableInfo;
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: boolean;
    size: number;
    number: number;
    sort: {
      sorted: boolean;
      empty: boolean;
      unsorted: boolean;
    };
    numberOfElements: number;
    empty: boolean;
  };
}

export interface PageableInfo {
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
  sort: {
    sorted: boolean;
    empty: boolean;
    unsorted: boolean;
  };
}


export interface GuestbookItemResponse {
  id: number;
  author: string;
  content: string;
  createdAt: string;
}

export interface GuestbookCreateApiResponse {
  status: number;
  code: string;
  message: string;
  data: GuestbookItemResponse;
}

export interface CreateGuestbookDto {
  author: string;
  message: string;
}


