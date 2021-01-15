/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/marketplaceAgreementsMappers";
import * as Parameters from "../models/parameters";
import { ConfluentManagementClientContext } from "../confluentManagementClientContext";

/** Class representing a MarketplaceAgreements. */
export class MarketplaceAgreements {
  private readonly client: ConfluentManagementClientContext;

  /**
   * Create a MarketplaceAgreements.
   * @param {ConfluentManagementClientContext} client Reference to the service client.
   */
  constructor(client: ConfluentManagementClientContext) {
    this.client = client;
  }

  /**
   * @summary List Confluent marketplace agreements in the subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.MarketplaceAgreementsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.MarketplaceAgreementsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.ConfluentAgreementResourceListResponse>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConfluentAgreementResourceListResponse>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConfluentAgreementResourceListResponse>, callback?: msRest.ServiceCallback<Models.ConfluentAgreementResourceListResponse>): Promise<Models.MarketplaceAgreementsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MarketplaceAgreementsListResponse>;
  }

  /**
   * @summary Accept marketplace terms.
   * @param [options] The optional parameters
   * @returns Promise<Models.MarketplaceAgreementsCreateResponse>
   */
  create(options?: Models.MarketplaceAgreementsCreateOptionalParams): Promise<Models.MarketplaceAgreementsCreateResponse>;
  /**
   * @param callback The callback
   */
  create(callback: msRest.ServiceCallback<Models.ConfluentAgreementResource>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  create(options: Models.MarketplaceAgreementsCreateOptionalParams, callback: msRest.ServiceCallback<Models.ConfluentAgreementResource>): void;
  create(options?: Models.MarketplaceAgreementsCreateOptionalParams | msRest.ServiceCallback<Models.ConfluentAgreementResource>, callback?: msRest.ServiceCallback<Models.ConfluentAgreementResource>): Promise<Models.MarketplaceAgreementsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      createOperationSpec,
      callback) as Promise<Models.MarketplaceAgreementsCreateResponse>;
  }

  /**
   * @summary List Confluent marketplace agreements in the subscription.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MarketplaceAgreementsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.MarketplaceAgreementsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ConfluentAgreementResourceListResponse>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConfluentAgreementResourceListResponse>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConfluentAgreementResourceListResponse>, callback?: msRest.ServiceCallback<Models.ConfluentAgreementResourceListResponse>): Promise<Models.MarketplaceAgreementsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.MarketplaceAgreementsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Confluent/agreements",
  urlParameters: [
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConfluentAgreementResourceListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Confluent/agreements/default",
  urlParameters: [
    Parameters.subscriptionId
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.ConfluentAgreementResource
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConfluentAgreementResource
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConfluentAgreementResourceListResponse
    },
    default: {
      bodyMapper: Mappers.ResourceProviderDefaultErrorResponse
    }
  },
  serializer
};