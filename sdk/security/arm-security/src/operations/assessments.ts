/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/assessmentsMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a Assessments. */
export class Assessments {
  private readonly client: SecurityCenterContext;

  /**
   * Create a Assessments.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Get security assessments on all your scanned resources inside a scope
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsListResponse>
   */
  list(scope: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsListResponse>;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param callback The callback
   */
  list(scope: string, callback: msRest.ServiceCallback<Models.SecurityAssessmentList>): void;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param options The optional parameters
   * @param callback The callback
   */
  list(scope: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityAssessmentList>): void;
  list(scope: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityAssessmentList>, callback?: msRest.ServiceCallback<Models.SecurityAssessmentList>): Promise<Models.AssessmentsListResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AssessmentsListResponse>;
  }

  /**
   * Get a security assessment on your scanned resource
   * @param resourceId The identifier of the resource.
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsGetResponse>
   */
  get(resourceId: string, assessmentName: string, options?: Models.AssessmentsGetOptionalParams): Promise<Models.AssessmentsGetResponse>;
  /**
   * @param resourceId The identifier of the resource.
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param callback The callback
   */
  get(resourceId: string, assessmentName: string, callback: msRest.ServiceCallback<Models.SecurityAssessment>): void;
  /**
   * @param resourceId The identifier of the resource.
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceId: string, assessmentName: string, options: Models.AssessmentsGetOptionalParams, callback: msRest.ServiceCallback<Models.SecurityAssessment>): void;
  get(resourceId: string, assessmentName: string, options?: Models.AssessmentsGetOptionalParams | msRest.ServiceCallback<Models.SecurityAssessment>, callback?: msRest.ServiceCallback<Models.SecurityAssessment>): Promise<Models.AssessmentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceId,
        assessmentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AssessmentsGetResponse>;
  }

  /**
   * Create a security assessment on your resource. An assessment metadata that describes this
   * assessment must be predefined with the same name before inserting the assessment result
   * @param resourceId The identifier of the resource.
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param assessment Calculated assessment on a pre-defined assessment metadata
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceId: string, assessmentName: string, assessment: Models.SecurityAssessment, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsCreateOrUpdateResponse>;
  /**
   * @param resourceId The identifier of the resource.
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param assessment Calculated assessment on a pre-defined assessment metadata
   * @param callback The callback
   */
  createOrUpdate(resourceId: string, assessmentName: string, assessment: Models.SecurityAssessment, callback: msRest.ServiceCallback<Models.SecurityAssessment>): void;
  /**
   * @param resourceId The identifier of the resource.
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param assessment Calculated assessment on a pre-defined assessment metadata
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceId: string, assessmentName: string, assessment: Models.SecurityAssessment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityAssessment>): void;
  createOrUpdate(resourceId: string, assessmentName: string, assessment: Models.SecurityAssessment, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityAssessment>, callback?: msRest.ServiceCallback<Models.SecurityAssessment>): Promise<Models.AssessmentsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceId,
        assessmentName,
        assessment,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AssessmentsCreateOrUpdateResponse>;
  }

  /**
   * Delete a security assessment on your resource. An assessment metadata that describes this
   * assessment must be predefined with the same name before inserting the assessment result
   * @param resourceId The identifier of the resource.
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceId: string, assessmentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceId The identifier of the resource.
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param callback The callback
   */
  deleteMethod(resourceId: string, assessmentName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceId The identifier of the resource.
   * @param assessmentName The Assessment Key - Unique key for the assessment type
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceId: string, assessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceId: string, assessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceId,
        assessmentName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Get security assessments on all your scanned resources inside a scope
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessmentsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessmentsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SecurityAssessmentList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SecurityAssessmentList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SecurityAssessmentList>, callback?: msRest.ServiceCallback<Models.SecurityAssessmentList>): Promise<Models.AssessmentsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AssessmentsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Security/assessments",
  urlParameters: [
    Parameters.scope
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecurityAssessmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{resourceId}/providers/Microsoft.Security/assessments/{assessmentName}",
  urlParameters: [
    Parameters.resourceId,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion7,
    Parameters.expand
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SecurityAssessment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{resourceId}/providers/Microsoft.Security/assessments/{assessmentName}",
  urlParameters: [
    Parameters.resourceId,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "assessment",
    mapper: {
      ...Mappers.SecurityAssessment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SecurityAssessment
    },
    201: {
      bodyMapper: Mappers.SecurityAssessment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "{resourceId}/providers/Microsoft.Security/assessments/{assessmentName}",
  urlParameters: [
    Parameters.resourceId,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion7
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
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
      bodyMapper: Mappers.SecurityAssessmentList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
