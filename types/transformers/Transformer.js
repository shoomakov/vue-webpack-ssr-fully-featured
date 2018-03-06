// @flow

export type PaginationResult = {
  pagination: {
    total: number,
    count: number,
    perPage: number,
    currentPage: number,
    totalPages: number,
    links: {
      next: string
    }
  }
}

export type PaginationParams = {
  [key: string]: number
}

export type Validation = {
  message: string,
  validation: {
    [key: string]: Array<string>
  }
}

export type ValidationSend = {
  ...Validation,
  statusCode: number,
}

export type ValidationFetch = {
  ...Validation,
  status_code: number,
}
