// @flow
/* ============
 * Transformer
 * ============
 */
import type {PaginationResult, ValidationSend, ValidationFetch, PaginationParams} from '../../types/transformers/Transformer'

/**
 *
 */
export default class Transformer {
  // static fetch (item: Object) {}
  // static send (item: Object) {}
  /**
   * Method used to transform a fetched collection.
   *
   * @param items The items to be transformed.
   *
   * @returns {Array} The transformed items.
   */
  // static fetchCollection (items: Array<T>) {
  //   return items.map(item => this.fetch(item))
  // }

  /**
   * Method used to transform a collection to be send.
   *
   * @param items The items to be transformed.
   *
   * @returns {Array} The transformed items.
   */
  // static sendCollection (items: Array<T>) {
  //   return items.map(item => this.send(item))
  // }

  /**
   *
   * @param error
   * @returns {{message: *, statusCode: number, validation: *}}
   */
  static fetchValidation (error: ValidationFetch): ValidationSend {
    return {
      message: error.message,
      statusCode: error.status_code,
      validation: error.validation
    }
  }

  /**
   *
   * @param meta
   * @returns {{pagination: {total: *|number|PaymentItem, count, perPage: *|number, currentPage: *, totalPages: *, links: {next: *}}}}
   */
  static fetchPagination (meta: { pagination: Object }): PaginationResult {
    return {
      pagination: {
        total: meta.pagination.total,
        count: meta.pagination.count,
        perPage: meta.pagination.per_page,
        currentPage: meta.pagination.current_page,
        totalPages: meta.pagination.total_pages,
        links: {
          next: meta.pagination.links.next
        }
      }
    }
  }

  static paginationParams (params: PaginationParams): PaginationParams {
    return params ? {
      per_page: params.perPage || 10,
      page: params.page
    } : {}
  }
}
