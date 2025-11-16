import axios from 'axios';
import type {
  GuestbookEntry,
  GuestbookPageResponse,
  GuestbookListApiResponse,
  GuestbookItemResponse,
  GuestbookCreateApiResponse,
  CreateGuestbookDto,
} from '@/types/guestbook/guestbookApi';


const BASE_URL = import.meta.env.VITE_BASE_URL + '/api/guestbook';

function toEntry(item: GuestbookItemResponse): GuestbookEntry {
  return {
    id: item.id,
    author: item.author,
    message: item.content,
    createdAt: item.createdAt,
  };
}

export async function createGuestbook(
  dto: CreateGuestbookDto,
): Promise<GuestbookEntry> {
  const res = await axios.post<GuestbookCreateApiResponse>(BASE_URL, {
    author: dto.author,
    content: dto.message,
  });

  const item = res.data.data;

  return toEntry(item);
}

function toPageResponse(apiData: GuestbookListApiResponse['data']): GuestbookPageResponse {
  return {
    content: apiData.content.map(toEntry),
    totalPages: apiData.totalPages,
    totalElements: apiData.totalElements,
  };
}

export async function fetchGuestbookPage(
  page: number,
  size: number,
): Promise<GuestbookPageResponse> {
  const res = await axios.get<GuestbookListApiResponse>(BASE_URL, {
    params: { page, size },
  });

  const apiData = res.data?.data;

  return toPageResponse(apiData);
}

