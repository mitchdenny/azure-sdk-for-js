// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import * as coreHttp from "@azure/core-http";

export const LinkedServiceListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedServiceListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedService: coreHttp.CompositeMapper = {
  serializedName: "LinkedService",
  type: {
    name: "Composite",
    className: "LinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      connectVia: {
        serializedName: "connectVia",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeReference"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParameterSpecification" }
          }
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      }
    }
  }
};

export const IntegrationRuntimeReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeReference",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ParameterSpecification: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ParameterSpecification",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const Resource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudError: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudError",
    modelProperties: {
      code: {
        serializedName: "error.code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "error.message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "error.target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "error.details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudError"
            }
          }
        }
      }
    }
  }
};

export const ArtifactRenameRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ArtifactRenameRequest",
    modelProperties: {
      newName: {
        constraints: {
          Pattern: new RegExp("^[A-Za-z0-9_][^<>*#.%&:\\+?/]*$"),
          MaxLength: 260,
          MinLength: 1
        },
        serializedName: "newName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DatasetListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dataset: coreHttp.CompositeMapper = {
  serializedName: "Dataset",
  type: {
    name: "Composite",
    className: "Dataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      structure: {
        serializedName: "structure",
        type: {
          name: "any"
        }
      },
      schema: {
        serializedName: "schema",
        type: {
          name: "any"
        }
      },
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParameterSpecification" }
          }
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      folder: {
        serializedName: "folder",
        type: {
          name: "Composite",
          className: "DatasetFolder"
        }
      }
    }
  }
};

export const LinkedServiceReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedServiceReference",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DatasetFolder: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetFolder",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelineListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PipelineResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Activity: coreHttp.CompositeMapper = {
  serializedName: "Activity",
  type: {
    name: "Composite",
    className: "Activity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      dependsOn: {
        serializedName: "dependsOn",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ActivityDependency"
            }
          }
        }
      },
      userProperties: {
        serializedName: "userProperties",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "UserProperty"
            }
          }
        }
      }
    }
  }
};

export const ActivityDependency: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ActivityDependency",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      activity: {
        serializedName: "activity",
        required: true,
        type: {
          name: "String"
        }
      },
      dependencyConditions: {
        serializedName: "dependencyConditions",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const UserProperty: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "UserProperty",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const VariableSpecification: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VariableSpecification",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PipelineFolder: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineFolder",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateRunResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateRunResponse",
    modelProperties: {
      runId: {
        serializedName: "runId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RunFilterParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunFilterParameters",
    modelProperties: {
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      },
      lastUpdatedAfter: {
        serializedName: "lastUpdatedAfter",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      lastUpdatedBefore: {
        serializedName: "lastUpdatedBefore",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      filters: {
        serializedName: "filters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunQueryFilter"
            }
          }
        }
      },
      orderBy: {
        serializedName: "orderBy",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RunQueryOrderBy"
            }
          }
        }
      }
    }
  }
};

export const RunQueryFilter: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunQueryFilter",
    modelProperties: {
      operand: {
        serializedName: "operand",
        required: true,
        type: {
          name: "String"
        }
      },
      operator: {
        serializedName: "operator",
        required: true,
        type: {
          name: "String"
        }
      },
      values: {
        serializedName: "values",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const RunQueryOrderBy: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RunQueryOrderBy",
    modelProperties: {
      orderBy: {
        serializedName: "orderBy",
        required: true,
        type: {
          name: "String"
        }
      },
      order: {
        serializedName: "order",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelineRunsQueryResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineRunsQueryResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PipelineRun"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelineRun: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineRun",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      runId: {
        serializedName: "runId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      runGroupId: {
        serializedName: "runGroupId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      isLatest: {
        serializedName: "isLatest",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      pipelineName: {
        serializedName: "pipelineName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      invokedBy: {
        serializedName: "invokedBy",
        type: {
          name: "Composite",
          className: "PipelineRunInvokedBy"
        }
      },
      lastUpdated: {
        serializedName: "lastUpdated",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      runStart: {
        serializedName: "runStart",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      runEnd: {
        serializedName: "runEnd",
        readOnly: true,
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      durationInMs: {
        serializedName: "durationInMs",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelineRunInvokedBy: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineRunInvokedBy",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      invokedByType: {
        serializedName: "invokedByType",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ActivityRunsQueryResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ActivityRunsQueryResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ActivityRun"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ActivityRun: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ActivityRun",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      pipelineName: {
        serializedName: "pipelineName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      pipelineRunId: {
        serializedName: "pipelineRunId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      activityName: {
        serializedName: "activityName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      activityType: {
        serializedName: "activityType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      activityRunId: {
        serializedName: "activityRunId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      linkedServiceName: {
        serializedName: "linkedServiceName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      activityRunStart: {
        serializedName: "activityRunStart",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      activityRunEnd: {
        serializedName: "activityRunEnd",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      durationInMs: {
        serializedName: "durationInMs",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      input: {
        serializedName: "input",
        readOnly: true,
        type: {
          name: "any"
        }
      },
      output: {
        serializedName: "output",
        readOnly: true,
        type: {
          name: "any"
        }
      },
      error: {
        serializedName: "error",
        readOnly: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const TriggerListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TriggerResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Trigger: coreHttp.CompositeMapper = {
  serializedName: "Trigger",
  type: {
    name: "Composite",
    className: "Trigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      runtimeState: {
        serializedName: "runtimeState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      }
    }
  }
};

export const TriggerSubscriptionOperationStatus: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerSubscriptionOperationStatus",
    modelProperties: {
      triggerName: {
        serializedName: "triggerName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TriggerRunsQueryResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerRunsQueryResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TriggerRun"
            }
          }
        }
      },
      continuationToken: {
        serializedName: "continuationToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TriggerRun: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerRun",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      triggerRunId: {
        serializedName: "triggerRunId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      triggerName: {
        serializedName: "triggerName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      triggerType: {
        serializedName: "triggerType",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      triggerRunTimestamp: {
        serializedName: "triggerRunTimestamp",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      triggeredPipelines: {
        serializedName: "triggeredPipelines",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const DataFlow: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlow",
    uberParent: "DataFlow",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      annotations: {
        serializedName: "annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      folder: {
        serializedName: "folder",
        type: {
          name: "Composite",
          className: "DataFlowFolder"
        }
      }
    }
  }
};

export const DataFlowFolder: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowFolder",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CreateDataFlowDebugSessionRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateDataFlowDebugSessionRequest",
    modelProperties: {
      dataFlowName: {
        serializedName: "dataFlowName",
        type: {
          name: "String"
        }
      },
      existingClusterId: {
        serializedName: "existingClusterId",
        type: {
          name: "String"
        }
      },
      clusterTimeout: {
        serializedName: "clusterTimeout",
        type: {
          name: "Number"
        }
      },
      newClusterName: {
        serializedName: "newClusterName",
        type: {
          name: "String"
        }
      },
      newClusterNodeType: {
        serializedName: "newClusterNodeType",
        type: {
          name: "String"
        }
      },
      dataBricksLinkedService: {
        serializedName: "dataBricksLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceResource"
        }
      }
    }
  }
};

export const CreateDataFlowDebugSessionResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CreateDataFlowDebugSessionResponse",
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const QueryDataFlowDebugSessionsResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "QueryDataFlowDebugSessionsResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowDebugSessionInfo"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugSessionInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugSessionInfo",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      dataFlowName: {
        serializedName: "dataFlowName",
        type: {
          name: "String"
        }
      },
      computeType: {
        serializedName: "computeType",
        type: {
          name: "String"
        }
      },
      coreCount: {
        serializedName: "coreCount",
        type: {
          name: "Number"
        }
      },
      nodeCount: {
        serializedName: "nodeCount",
        type: {
          name: "Number"
        }
      },
      integrationRuntimeName: {
        serializedName: "integrationRuntimeName",
        type: {
          name: "String"
        }
      },
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "String"
        }
      },
      timeToLiveInMinutes: {
        serializedName: "timeToLiveInMinutes",
        type: {
          name: "Number"
        }
      },
      lastActivityTime: {
        serializedName: "lastActivityTime",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugPackage: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugPackage",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      dataFlow: {
        serializedName: "dataFlow",
        type: {
          name: "Composite",
          className: "DataFlowDebugResource"
        }
      },
      datasets: {
        serializedName: "datasets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetDebugResource"
            }
          }
        }
      },
      linkedServices: {
        serializedName: "linkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceDebugResource"
            }
          }
        }
      },
      staging: {
        serializedName: "staging",
        type: {
          name: "Composite",
          className: "DataFlowStagingInfo"
        }
      },
      debugSettings: {
        serializedName: "debugSettings",
        type: {
          name: "Composite",
          className: "DataFlowDebugPackageDebugSettings"
        }
      }
    }
  }
};

export const SubResourceDebugResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResourceDebugResource",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowStagingInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowStagingInfo",
    modelProperties: {
      linkedService: {
        serializedName: "linkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      folderPath: {
        serializedName: "folderPath",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugPackageDebugSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugPackageDebugSettings",
    modelProperties: {
      sourceSettings: {
        serializedName: "sourceSettings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowSourceSetting"
            }
          }
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      datasetParameters: {
        serializedName: "datasetParameters",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DataFlowSourceSetting: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowSourceSetting",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      sourceName: {
        serializedName: "sourceName",
        type: {
          name: "String"
        }
      },
      rowLimit: {
        serializedName: "rowLimit",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AddDataFlowToDebugSessionResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AddDataFlowToDebugSessionResponse",
    modelProperties: {
      jobVersion: {
        serializedName: "jobVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DeleteDataFlowDebugSessionRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DeleteDataFlowDebugSessionRequest",
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      dataFlowName: {
        serializedName: "dataFlowName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugCommandRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugCommandRequest",
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        required: true,
        type: {
          name: "String"
        }
      },
      dataFlowName: {
        serializedName: "dataFlowName",
        type: {
          name: "String"
        }
      },
      commandName: {
        serializedName: "commandName",
        type: {
          name: "String"
        }
      },
      commandPayload: {
        serializedName: "commandPayload",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DataFlowDebugCommandResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugCommandResponse",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlScriptsListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlScriptsListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SqlScriptResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlScriptResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlScriptResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SqlScript"
        }
      }
    }
  }
};

export const SqlScript: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlScript",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "Composite",
          className: "SqlScriptContent"
        }
      }
    }
  }
};

export const SqlScriptContent: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlScriptContent",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      query: {
        serializedName: "query",
        required: true,
        type: {
          name: "String"
        }
      },
      currentConnection: {
        serializedName: "currentConnection",
        type: {
          name: "Composite",
          className: "SqlConnection"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "SqlScriptMetadata"
        }
      }
    }
  }
};

export const SqlConnection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlConnection",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlScriptMetadata: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlScriptMetadata",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      language: {
        serializedName: "language",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SparkJobDefinitionsListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SparkJobDefinitionsListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SparkJobDefinitionResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SparkJobDefinition: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SparkJobDefinition",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      targetBigDataPool: {
        serializedName: "targetBigDataPool",
        type: {
          name: "Composite",
          className: "BigDataPoolReference"
        }
      },
      requiredSparkVersion: {
        serializedName: "requiredSparkVersion",
        type: {
          name: "String"
        }
      },
      language: {
        serializedName: "language",
        type: {
          name: "String"
        }
      },
      jobProperties: {
        serializedName: "jobProperties",
        type: {
          name: "Composite",
          className: "SparkJobProperties"
        }
      }
    }
  }
};

export const BigDataPoolReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BigDataPoolReference",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SparkJobProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SparkJobProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      file: {
        serializedName: "file",
        required: true,
        type: {
          name: "String"
        }
      },
      className: {
        serializedName: "className",
        type: {
          name: "String"
        }
      },
      conf: {
        serializedName: "conf",
        type: {
          name: "any"
        }
      },
      args: {
        serializedName: "args",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      jars: {
        serializedName: "jars",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      files: {
        serializedName: "files",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      archives: {
        serializedName: "archives",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      driverMemory: {
        serializedName: "driverMemory",
        required: true,
        type: {
          name: "String"
        }
      },
      driverCores: {
        serializedName: "driverCores",
        required: true,
        type: {
          name: "Number"
        }
      },
      executorMemory: {
        serializedName: "executorMemory",
        required: true,
        type: {
          name: "String"
        }
      },
      executorCores: {
        serializedName: "executorCores",
        required: true,
        type: {
          name: "Number"
        }
      },
      numExecutors: {
        serializedName: "numExecutors",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SparkBatchJob: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SparkBatchJob",
    modelProperties: {
      livyInfo: {
        serializedName: "livyInfo",
        type: {
          name: "Composite",
          className: "SparkBatchJobState"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      workspaceName: {
        serializedName: "workspaceName",
        type: {
          name: "String"
        }
      },
      sparkPoolName: {
        serializedName: "sparkPoolName",
        type: {
          name: "String"
        }
      },
      submitterName: {
        serializedName: "submitterName",
        type: {
          name: "String"
        }
      },
      submitterId: {
        serializedName: "submitterId",
        type: {
          name: "String"
        }
      },
      artifactId: {
        serializedName: "artifactId",
        type: {
          name: "String"
        }
      },
      jobType: {
        serializedName: "jobType",
        type: {
          name: "String"
        }
      },
      result: {
        serializedName: "result",
        type: {
          name: "String"
        }
      },
      scheduler: {
        serializedName: "schedulerInfo",
        type: {
          name: "Composite",
          className: "SparkScheduler"
        }
      },
      plugin: {
        serializedName: "pluginInfo",
        type: {
          name: "Composite",
          className: "SparkServicePlugin"
        }
      },
      errors: {
        serializedName: "errorInfo",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SparkServiceError"
            }
          }
        }
      },
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      id: {
        serializedName: "id",
        required: true,
        type: {
          name: "Number"
        }
      },
      appId: {
        serializedName: "appId",
        nullable: true,
        type: {
          name: "String"
        }
      },
      appInfo: {
        serializedName: "appInfo",
        nullable: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      state: {
        serializedName: "state",
        type: {
          name: "String"
        }
      },
      logLines: {
        serializedName: "log",
        nullable: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const SparkBatchJobState: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SparkBatchJobState",
    modelProperties: {
      notStartedAt: {
        serializedName: "notStartedAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      startingAt: {
        serializedName: "startingAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      runningAt: {
        serializedName: "runningAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      deadAt: {
        serializedName: "deadAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      successAt: {
        serializedName: "successAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      terminatedAt: {
        serializedName: "killedAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      recoveringAt: {
        serializedName: "recoveringAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      currentState: {
        serializedName: "currentState",
        type: {
          name: "String"
        }
      },
      jobCreationRequest: {
        serializedName: "jobCreationRequest",
        type: {
          name: "Composite",
          className: "SparkRequest"
        }
      }
    }
  }
};

export const SparkRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SparkRequest",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      file: {
        serializedName: "file",
        type: {
          name: "String"
        }
      },
      className: {
        serializedName: "className",
        type: {
          name: "String"
        }
      },
      arguments: {
        serializedName: "args",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      jars: {
        serializedName: "jars",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      pythonFiles: {
        serializedName: "pyFiles",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      files: {
        serializedName: "files",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      archives: {
        serializedName: "archives",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      configuration: {
        serializedName: "conf",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      driverMemory: {
        serializedName: "driverMemory",
        type: {
          name: "String"
        }
      },
      driverCores: {
        serializedName: "driverCores",
        type: {
          name: "Number"
        }
      },
      executorMemory: {
        serializedName: "executorMemory",
        type: {
          name: "String"
        }
      },
      executorCores: {
        serializedName: "executorCores",
        type: {
          name: "Number"
        }
      },
      executorCount: {
        serializedName: "numExecutors",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const SparkScheduler: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SparkScheduler",
    modelProperties: {
      submittedAt: {
        serializedName: "submittedAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      scheduledAt: {
        serializedName: "scheduledAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      endedAt: {
        serializedName: "endedAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      cancellationRequestedAt: {
        serializedName: "cancellationRequestedAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      currentState: {
        serializedName: "currentState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SparkServicePlugin: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SparkServicePlugin",
    modelProperties: {
      preparationStartedAt: {
        serializedName: "preparationStartedAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      resourceAcquisitionStartedAt: {
        serializedName: "resourceAcquisitionStartedAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      submissionStartedAt: {
        serializedName: "submissionStartedAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      monitoringStartedAt: {
        serializedName: "monitoringStartedAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      cleanupStartedAt: {
        serializedName: "cleanupStartedAt",
        nullable: true,
        type: {
          name: "DateTime"
        }
      },
      currentState: {
        serializedName: "currentState",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SparkServiceError: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SparkServiceError",
    modelProperties: {
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      errorCode: {
        serializedName: "errorCode",
        type: {
          name: "String"
        }
      },
      source: {
        serializedName: "source",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotebookListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NotebookListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NotebookResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotebookResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NotebookResource",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Notebook"
        }
      }
    }
  }
};

export const Notebook: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Notebook",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      bigDataPool: {
        serializedName: "bigDataPool",
        type: {
          name: "Composite",
          className: "BigDataPoolReference"
        }
      },
      sessionProperties: {
        serializedName: "sessionProperties",
        type: {
          name: "Composite",
          className: "NotebookSessionProperties"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "Composite",
          className: "NotebookMetadata"
        }
      },
      nbformat: {
        serializedName: "nbformat",
        required: true,
        type: {
          name: "Number"
        }
      },
      nbformatMinor: {
        serializedName: "nbformat_minor",
        required: true,
        type: {
          name: "Number"
        }
      },
      cells: {
        serializedName: "cells",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NotebookCell"
            }
          }
        }
      }
    }
  }
};

export const NotebookSessionProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NotebookSessionProperties",
    modelProperties: {
      driverMemory: {
        serializedName: "driverMemory",
        required: true,
        type: {
          name: "String"
        }
      },
      driverCores: {
        serializedName: "driverCores",
        required: true,
        type: {
          name: "Number"
        }
      },
      executorMemory: {
        serializedName: "executorMemory",
        required: true,
        type: {
          name: "String"
        }
      },
      executorCores: {
        serializedName: "executorCores",
        required: true,
        type: {
          name: "Number"
        }
      },
      numExecutors: {
        serializedName: "numExecutors",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const NotebookMetadata: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NotebookMetadata",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      kernelspec: {
        serializedName: "kernelspec",
        type: {
          name: "Composite",
          className: "NotebookKernelSpec"
        }
      },
      languageInfo: {
        serializedName: "language_info",
        type: {
          name: "Composite",
          className: "NotebookLanguageInfo"
        }
      }
    }
  }
};

export const NotebookKernelSpec: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NotebookKernelSpec",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "display_name",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotebookLanguageInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NotebookLanguageInfo",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      codemirrorMode: {
        serializedName: "codemirror_mode",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const NotebookCell: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NotebookCell",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      cellType: {
        serializedName: "cell_type",
        required: true,
        type: {
          name: "String"
        }
      },
      metadata: {
        serializedName: "metadata",
        required: true,
        type: {
          name: "any"
        }
      },
      source: {
        serializedName: "source",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      attachments: {
        serializedName: "attachments",
        nullable: true,
        type: {
          name: "any"
        }
      },
      outputs: {
        serializedName: "outputs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "NotebookCellOutputItem"
            }
          }
        }
      }
    }
  }
};

export const NotebookCellOutputItem: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NotebookCellOutputItem",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      executionCount: {
        serializedName: "execution_count",
        type: {
          name: "Number"
        }
      },
      outputType: {
        serializedName: "output_type",
        required: true,
        type: {
          name: "String"
        }
      },
      text: {
        serializedName: "text",
        type: {
          name: "any"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "any"
        }
      },
      metadata: {
        serializedName: "metadata",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DataLakeStorageAccountDetails: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataLakeStorageAccountDetails",
    modelProperties: {
      accountUrl: {
        serializedName: "accountUrl",
        type: {
          name: "String"
        }
      },
      filesystem: {
        serializedName: "filesystem",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const VirtualNetworkProfile: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "VirtualNetworkProfile",
    modelProperties: {
      computeSubnetId: {
        serializedName: "computeSubnetId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateEndpoint: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpoint",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PrivateLinkServiceConnectionState: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateLinkServiceConnectionState",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      actionsRequired: {
        serializedName: "actionsRequired",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EncryptionDetails: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EncryptionDetails",
    modelProperties: {
      doubleEncryptionEnabled: {
        serializedName: "doubleEncryptionEnabled",
        readOnly: true,
        type: {
          name: "Boolean"
        }
      },
      cmk: {
        serializedName: "cmk",
        type: {
          name: "Composite",
          className: "CustomerManagedKeyDetails"
        }
      }
    }
  }
};

export const CustomerManagedKeyDetails: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomerManagedKeyDetails",
    modelProperties: {
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      key: {
        serializedName: "key",
        type: {
          name: "Composite",
          className: "WorkspaceKeyDetails"
        }
      }
    }
  }
};

export const WorkspaceKeyDetails: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceKeyDetails",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      keyVaultUrl: {
        serializedName: "keyVaultUrl",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedVirtualNetworkSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedVirtualNetworkSettings",
    modelProperties: {
      preventDataExfiltration: {
        serializedName: "preventDataExfiltration",
        type: {
          name: "Boolean"
        }
      },
      linkedAccessCheckOnTargetResource: {
        serializedName: "linkedAccessCheckOnTargetResource",
        type: {
          name: "Boolean"
        }
      },
      allowedAadTenantIdsForLinking: {
        serializedName: "allowedAadTenantIdsForLinking",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const WorkspaceRepositoryConfiguration: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceRepositoryConfiguration",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      hostName: {
        serializedName: "hostName",
        type: {
          name: "String"
        }
      },
      accountName: {
        serializedName: "accountName",
        type: {
          name: "String"
        }
      },
      projectName: {
        serializedName: "projectName",
        type: {
          name: "String"
        }
      },
      repositoryName: {
        serializedName: "repositoryName",
        type: {
          name: "String"
        }
      },
      collaborationBranch: {
        serializedName: "collaborationBranch",
        type: {
          name: "String"
        }
      },
      rootFolder: {
        serializedName: "rootFolder",
        type: {
          name: "String"
        }
      },
      lastCommitId: {
        serializedName: "lastCommitId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        type: {
          name: "Uuid"
        }
      }
    }
  }
};

export const PurviewConfiguration: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PurviewConfiguration",
    modelProperties: {
      purviewResourceId: {
        serializedName: "purviewResourceId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ManagedIdentity: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ManagedIdentity",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: ["None", "SystemAssigned"]
        }
      }
    }
  }
};

export const ErrorContract: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorContract",
    modelProperties: {
      error: {
        serializedName: "error",
        type: {
          name: "Composite",
          className: "ErrorResponse"
        }
      }
    }
  }
};

export const ErrorResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      code: {
        serializedName: "code",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "target",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponse"
            }
          }
        }
      },
      additionalInfo: {
        serializedName: "additionalInfo",
        readOnly: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorAdditionalInfo"
            }
          }
        }
      }
    }
  }
};

export const ErrorAdditionalInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ErrorAdditionalInfo",
    modelProperties: {
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      info: {
        serializedName: "info",
        readOnly: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SqlPoolInfoListResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlPoolInfoListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SqlPool"
            }
          }
        }
      }
    }
  }
};

export const Sku: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BigDataPoolResourceInfoListResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BigDataPoolResourceInfoListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "BigDataPoolResourceInfo"
            }
          }
        }
      }
    }
  }
};

export const AutoScaleProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutoScaleProperties",
    modelProperties: {
      minNodeCount: {
        serializedName: "minNodeCount",
        type: {
          name: "Number"
        }
      },
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      },
      maxNodeCount: {
        serializedName: "maxNodeCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AutoPauseProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AutoPauseProperties",
    modelProperties: {
      delayInMinutes: {
        serializedName: "delayInMinutes",
        type: {
          name: "Number"
        }
      },
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DynamicExecutorAllocation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DynamicExecutorAllocation",
    modelProperties: {
      enabled: {
        serializedName: "enabled",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const LibraryRequirements: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LibraryRequirements",
    modelProperties: {
      time: {
        serializedName: "time",
        readOnly: true,
        type: {
          name: "DateTime"
        }
      },
      content: {
        serializedName: "content",
        type: {
          name: "String"
        }
      },
      filename: {
        serializedName: "filename",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "IntegrationRuntimeResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntime: coreHttp.CompositeMapper = {
  serializedName: "IntegrationRuntime",
  type: {
    name: "Composite",
    className: "IntegrationRuntime",
    uberParent: "IntegrationRuntime",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LibraryListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LibraryListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LibraryResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LibraryResourceProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LibraryResourceProperties",
    modelProperties: {
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      path: {
        serializedName: "path",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      containerName: {
        serializedName: "containerName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      uploadedTimestamp: {
        serializedName: "uploadedTimestamp",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      provisioningStatus: {
        serializedName: "provisioningStatus",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      creatorId: {
        serializedName: "creatorId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CloudErrorAutoGenerated: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CloudErrorAutoGenerated",
    modelProperties: {
      code: {
        serializedName: "error.code",
        required: true,
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "error.message",
        required: true,
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "error.target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "error.details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudErrorAutoGenerated"
            }
          }
        }
      }
    }
  }
};

export const LibraryResourceInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LibraryResourceInfo",
    modelProperties: {
      id: {
        serializedName: "id",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      recordId: {
        serializedName: "recordId",
        readOnly: true,
        type: {
          name: "Number"
        }
      },
      state: {
        serializedName: "state",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      created: {
        serializedName: "created",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      changed: {
        serializedName: "changed",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      operationId: {
        serializedName: "operationId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      artifactId: {
        serializedName: "artifactId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationResult: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OperationResult",
    modelProperties: {
      status: {
        serializedName: "status",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      code: {
        serializedName: "error.code",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "error.message",
        type: {
          name: "String"
        }
      },
      target: {
        serializedName: "error.target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "error.details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CloudErrorAutoGenerated"
            }
          }
        }
      }
    }
  }
};

export const GitHubAccessTokenRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GitHubAccessTokenRequest",
    modelProperties: {
      gitHubClientId: {
        serializedName: "gitHubClientId",
        required: true,
        type: {
          name: "String"
        }
      },
      gitHubAccessCode: {
        serializedName: "gitHubAccessCode",
        required: true,
        type: {
          name: "String"
        }
      },
      gitHubAccessTokenBaseUrl: {
        serializedName: "gitHubAccessTokenBaseUrl",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GitHubAccessTokenResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GitHubAccessTokenResponse",
    modelProperties: {
      gitHubAccessToken: {
        serializedName: "gitHubAccessToken",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Expression: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Expression",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SecretBase: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SecretBase",
    uberParent: "SecretBase",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const StartDataFlowDebugSessionRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StartDataFlowDebugSessionRequest",
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      dataFlow: {
        serializedName: "dataFlow",
        type: {
          name: "Composite",
          className: "DataFlowResource"
        }
      },
      datasets: {
        serializedName: "datasets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetResource"
            }
          }
        }
      },
      linkedServices: {
        serializedName: "linkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceResource"
            }
          }
        }
      },
      staging: {
        serializedName: "staging",
        type: {
          name: "any"
        }
      },
      debugSettings: {
        serializedName: "debugSettings",
        type: {
          name: "any"
        }
      },
      incrementalDebug: {
        serializedName: "incrementalDebug",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const StartDataFlowDebugSessionResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StartDataFlowDebugSessionResponse",
    modelProperties: {
      jobVersion: {
        serializedName: "jobVersion",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugPreviewDataRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugPreviewDataRequest",
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      dataFlowName: {
        serializedName: "dataFlowName",
        type: {
          name: "String"
        }
      },
      streamName: {
        serializedName: "streamName",
        type: {
          name: "String"
        }
      },
      rowLimits: {
        serializedName: "rowLimits",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DataFlowDebugStatisticsRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugStatisticsRequest",
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      dataFlowName: {
        serializedName: "dataFlowName",
        type: {
          name: "String"
        }
      },
      streamName: {
        serializedName: "streamName",
        type: {
          name: "String"
        }
      },
      columns: {
        serializedName: "columns",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const EvaluateDataFlowExpressionRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EvaluateDataFlowExpressionRequest",
    modelProperties: {
      sessionId: {
        serializedName: "sessionId",
        type: {
          name: "String"
        }
      },
      dataFlowName: {
        serializedName: "dataFlowName",
        type: {
          name: "String"
        }
      },
      streamName: {
        serializedName: "streamName",
        type: {
          name: "String"
        }
      },
      rowLimits: {
        serializedName: "rowLimits",
        type: {
          name: "Number"
        }
      },
      expression: {
        serializedName: "expression",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugQueryResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugQueryResponse",
    modelProperties: {
      runId: {
        serializedName: "runId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugResultResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugResultResponse",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      data: {
        serializedName: "data",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TriggerDependencyProvisioningStatus: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerDependencyProvisioningStatus",
    modelProperties: {
      triggerName: {
        serializedName: "triggerName",
        required: true,
        type: {
          name: "String"
        }
      },
      provisioningStatus: {
        serializedName: "provisioningStatus",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PipelineReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineReference",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TriggerPipelineReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerPipelineReference",
    modelProperties: {
      pipelineReference: {
        serializedName: "pipelineReference",
        type: {
          name: "Composite",
          className: "PipelineReference"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const WorkspaceUpdateParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceUpdateParameters",
    modelProperties: {
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "WorkspaceIdentity"
        }
      }
    }
  }
};

export const WorkspaceIdentity: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WorkspaceIdentity",
    modelProperties: {
      type: {
        defaultValue: "SystemAssigned",
        isConstant: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      principalId: {
        serializedName: "principalId",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      tenantId: {
        serializedName: "tenantId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DatasetReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetReference",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const DataFlowReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowReference",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      },
      datasetParameters: {
        serializedName: "datasetParameters",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RerunTumblingWindowTriggerActionParameters: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RerunTumblingWindowTriggerActionParameters",
    modelProperties: {
      startTime: {
        serializedName: "startTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      maxConcurrency: {
        constraints: {
          InclusiveMaximum: 50,
          InclusiveMinimum: 1
        },
        serializedName: "maxConcurrency",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RerunTriggerListResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RerunTriggerListResponse",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RerunTriggerResource"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const GetSsisObjectMetadataRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "GetSsisObjectMetadataRequest",
    modelProperties: {
      metadataPath: {
        serializedName: "metadataPath",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SsisObjectMetadataStatusResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisObjectMetadataStatusResponse",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "String"
        }
      },
      error: {
        serializedName: "error",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExposureControlRequest: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExposureControlRequest",
    modelProperties: {
      featureName: {
        serializedName: "featureName",
        type: {
          name: "String"
        }
      },
      featureType: {
        serializedName: "featureType",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExposureControlResponse: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExposureControlResponse",
    modelProperties: {
      featureName: {
        serializedName: "featureName",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "value",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SynapseNotebookReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SynapseNotebookReference",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SynapseSparkJobReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SynapseSparkJobReference",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlPoolReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlPoolReference",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Transformation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Transformation",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DatasetLocation: coreHttp.CompositeMapper = {
  serializedName: "DatasetLocation",
  type: {
    name: "Composite",
    className: "DatasetLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      folderPath: {
        serializedName: "folderPath",
        type: {
          name: "any"
        }
      },
      fileName: {
        serializedName: "fileName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DatasetDataElement: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetDataElement",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "any"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DatasetSchemaDataElement: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetSchemaDataElement",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "any"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DatasetStorageFormat: coreHttp.CompositeMapper = {
  serializedName: "DatasetStorageFormat",
  type: {
    name: "Composite",
    className: "DatasetStorageFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      serializer: {
        serializedName: "serializer",
        type: {
          name: "any"
        }
      },
      deserializer: {
        serializedName: "deserializer",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DatasetCompression: coreHttp.CompositeMapper = {
  serializedName: "DatasetCompression",
  type: {
    name: "Composite",
    className: "DatasetCompression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WebLinkedServiceTypeProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebLinkedServiceTypeProperties",
    uberParent: "WebLinkedServiceTypeProperties",
    polymorphicDiscriminator: {
      serializedName: "authenticationType",
      clientName: "authenticationType"
    },
    modelProperties: {
      url: {
        serializedName: "url",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "authenticationType",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ScriptAction: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScriptAction",
    modelProperties: {
      name: {
        serializedName: "name",
        required: true,
        type: {
          name: "String"
        }
      },
      uri: {
        serializedName: "uri",
        required: true,
        type: {
          name: "String"
        }
      },
      roles: {
        serializedName: "roles",
        required: true,
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "parameters",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ActivityPolicy: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ActivityPolicy",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      timeout: {
        serializedName: "timeout",
        type: {
          name: "any"
        }
      },
      retry: {
        serializedName: "retry",
        type: {
          name: "any"
        }
      },
      retryIntervalInSeconds: {
        constraints: {
          InclusiveMaximum: 86400,
          InclusiveMinimum: 30
        },
        serializedName: "retryIntervalInSeconds",
        type: {
          name: "Number"
        }
      },
      secureInput: {
        serializedName: "secureInput",
        type: {
          name: "Boolean"
        }
      },
      secureOutput: {
        serializedName: "secureOutput",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const StoreReadSettings: coreHttp.CompositeMapper = {
  serializedName: "StoreReadSettings",
  type: {
    name: "Composite",
    className: "StoreReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      maxConcurrentConnections: {
        serializedName: "maxConcurrentConnections",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const StoreWriteSettings: coreHttp.CompositeMapper = {
  serializedName: "StoreWriteSettings",
  type: {
    name: "Composite",
    className: "StoreWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      maxConcurrentConnections: {
        serializedName: "maxConcurrentConnections",
        type: {
          name: "any"
        }
      },
      copyBehavior: {
        serializedName: "copyBehavior",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DistcpSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DistcpSettings",
    modelProperties: {
      resourceManagerEndpoint: {
        serializedName: "resourceManagerEndpoint",
        required: true,
        type: {
          name: "any"
        }
      },
      tempScriptPath: {
        serializedName: "tempScriptPath",
        required: true,
        type: {
          name: "any"
        }
      },
      distcpOptions: {
        serializedName: "distcpOptions",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const FormatReadSettings: coreHttp.CompositeMapper = {
  serializedName: "FormatReadSettings",
  type: {
    name: "Composite",
    className: "FormatReadSettings",
    uberParent: "FormatReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const FormatWriteSettings: coreHttp.CompositeMapper = {
  serializedName: "FormatWriteSettings",
  type: {
    name: "Composite",
    className: "FormatWriteSettings",
    uberParent: "FormatWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CopySource: coreHttp.CompositeMapper = {
  serializedName: "CopySource",
  type: {
    name: "Composite",
    className: "CopySource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      sourceRetryCount: {
        serializedName: "sourceRetryCount",
        type: {
          name: "any"
        }
      },
      sourceRetryWait: {
        serializedName: "sourceRetryWait",
        type: {
          name: "any"
        }
      },
      maxConcurrentConnections: {
        serializedName: "maxConcurrentConnections",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CopySink: coreHttp.CompositeMapper = {
  serializedName: "CopySink",
  type: {
    name: "Composite",
    className: "CopySink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      writeBatchSize: {
        serializedName: "writeBatchSize",
        type: {
          name: "any"
        }
      },
      writeBatchTimeout: {
        serializedName: "writeBatchTimeout",
        type: {
          name: "any"
        }
      },
      sinkRetryCount: {
        serializedName: "sinkRetryCount",
        type: {
          name: "any"
        }
      },
      sinkRetryWait: {
        serializedName: "sinkRetryWait",
        type: {
          name: "any"
        }
      },
      maxConcurrentConnections: {
        serializedName: "maxConcurrentConnections",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const StagingSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StagingSettings",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "any"
        }
      },
      enableCompression: {
        serializedName: "enableCompression",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RedirectIncompatibleRowSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RedirectIncompatibleRowSettings",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      linkedServiceName: {
        serializedName: "linkedServiceName",
        required: true,
        type: {
          name: "any"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapHanaPartitionSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SapHanaPartitionSettings",
    modelProperties: {
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapTablePartitionSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SapTablePartitionSettings",
    modelProperties: {
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "any"
        }
      },
      partitionUpperBound: {
        serializedName: "partitionUpperBound",
        type: {
          name: "any"
        }
      },
      partitionLowerBound: {
        serializedName: "partitionLowerBound",
        type: {
          name: "any"
        }
      },
      maxPartitionsNumber: {
        serializedName: "maxPartitionsNumber",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const StoredProcedureParameter: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "StoredProcedureParameter",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "any"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OraclePartitionSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "OraclePartitionSettings",
    modelProperties: {
      partitionNames: {
        serializedName: "partitionNames",
        type: {
          name: "any"
        }
      },
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "any"
        }
      },
      partitionUpperBound: {
        serializedName: "partitionUpperBound",
        type: {
          name: "any"
        }
      },
      partitionLowerBound: {
        serializedName: "partitionLowerBound",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const TeradataPartitionSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TeradataPartitionSettings",
    modelProperties: {
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "any"
        }
      },
      partitionUpperBound: {
        serializedName: "partitionUpperBound",
        type: {
          name: "any"
        }
      },
      partitionLowerBound: {
        serializedName: "partitionLowerBound",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MongoDbCursorMethodsProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "MongoDbCursorMethodsProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      project: {
        serializedName: "project",
        type: {
          name: "any"
        }
      },
      sort: {
        serializedName: "sort",
        type: {
          name: "any"
        }
      },
      skip: {
        serializedName: "skip",
        type: {
          name: "any"
        }
      },
      limit: {
        serializedName: "limit",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const NetezzaPartitionSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "NetezzaPartitionSettings",
    modelProperties: {
      partitionColumnName: {
        serializedName: "partitionColumnName",
        type: {
          name: "any"
        }
      },
      partitionUpperBound: {
        serializedName: "partitionUpperBound",
        type: {
          name: "any"
        }
      },
      partitionLowerBound: {
        serializedName: "partitionLowerBound",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RedshiftUnloadSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RedshiftUnloadSettings",
    modelProperties: {
      s3LinkedServiceName: {
        serializedName: "s3LinkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      bucketName: {
        serializedName: "bucketName",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PolybaseSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PolybaseSettings",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      rejectType: {
        serializedName: "rejectType",
        type: {
          name: "String"
        }
      },
      rejectValue: {
        serializedName: "rejectValue",
        type: {
          name: "any"
        }
      },
      rejectSampleValue: {
        serializedName: "rejectSampleValue",
        type: {
          name: "any"
        }
      },
      useTypeDefault: {
        serializedName: "useTypeDefault",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DWCopyCommandSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DWCopyCommandSettings",
    modelProperties: {
      defaultValues: {
        serializedName: "defaultValues",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DWCopyCommandDefaultValue"
            }
          }
        }
      },
      additionalOptions: {
        serializedName: "additionalOptions",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      }
    }
  }
};

export const DWCopyCommandDefaultValue: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DWCopyCommandDefaultValue",
    modelProperties: {
      columnName: {
        serializedName: "columnName",
        type: {
          name: "any"
        }
      },
      defaultValue: {
        serializedName: "defaultValue",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const LogStorageSettings: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LogStorageSettings",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CopyTranslator: coreHttp.CompositeMapper = {
  serializedName: "CopyTranslator",
  type: {
    name: "Composite",
    className: "CopyTranslator",
    uberParent: "CopyTranslator",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SsisPackageLocation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisPackageLocation",
    modelProperties: {
      packagePath: {
        serializedName: "packagePath",
        type: {
          name: "any"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      packagePassword: {
        serializedName: "typeProperties.packagePassword",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      accessCredential: {
        serializedName: "typeProperties.accessCredential",
        type: {
          name: "Composite",
          className: "SsisAccessCredential"
        }
      },
      configurationPath: {
        serializedName: "typeProperties.configurationPath",
        type: {
          name: "any"
        }
      },
      packageName: {
        serializedName: "typeProperties.packageName",
        type: {
          name: "String"
        }
      },
      packageContent: {
        serializedName: "typeProperties.packageContent",
        type: {
          name: "any"
        }
      },
      packageLastModifiedDate: {
        serializedName: "typeProperties.packageLastModifiedDate",
        type: {
          name: "String"
        }
      },
      childPackages: {
        serializedName: "typeProperties.childPackages",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SsisChildPackage"
            }
          }
        }
      }
    }
  }
};

export const SsisAccessCredential: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisAccessCredential",
    modelProperties: {
      domain: {
        serializedName: "domain",
        required: true,
        type: {
          name: "any"
        }
      },
      userName: {
        serializedName: "userName",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      }
    }
  }
};

export const SsisChildPackage: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisChildPackage",
    modelProperties: {
      packagePath: {
        serializedName: "packagePath",
        required: true,
        type: {
          name: "any"
        }
      },
      packageName: {
        serializedName: "packageName",
        type: {
          name: "String"
        }
      },
      packageContent: {
        serializedName: "packageContent",
        required: true,
        type: {
          name: "any"
        }
      },
      packageLastModifiedDate: {
        serializedName: "packageLastModifiedDate",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SsisExecutionCredential: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisExecutionCredential",
    modelProperties: {
      domain: {
        serializedName: "domain",
        required: true,
        type: {
          name: "any"
        }
      },
      userName: {
        serializedName: "userName",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "Composite",
          className: "SecureString"
        }
      }
    }
  }
};

export const SsisExecutionParameter: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisExecutionParameter",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SsisPropertyOverride: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisPropertyOverride",
    modelProperties: {
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "any"
        }
      },
      isSensitive: {
        serializedName: "isSensitive",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SsisLogLocation: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SsisLogLocation",
    modelProperties: {
      logPath: {
        serializedName: "logPath",
        required: true,
        type: {
          name: "any"
        }
      },
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      accessCredential: {
        serializedName: "typeProperties.accessCredential",
        type: {
          name: "Composite",
          className: "SsisAccessCredential"
        }
      },
      logRefreshInterval: {
        serializedName: "typeProperties.logRefreshInterval",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CustomActivityReferenceObject: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomActivityReferenceObject",
    modelProperties: {
      linkedServices: {
        serializedName: "linkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      datasets: {
        serializedName: "datasets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetReference"
            }
          }
        }
      }
    }
  }
};

export const WebActivityAuthentication: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "WebActivityAuthentication",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      pfx: {
        serializedName: "pfx",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      username: {
        serializedName: "username",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SwitchCase: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SwitchCase",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      },
      activities: {
        serializedName: "activities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      }
    }
  }
};

export const AzureMLWebServiceFile: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureMLWebServiceFile",
    modelProperties: {
      filePath: {
        serializedName: "filePath",
        required: true,
        type: {
          name: "any"
        }
      },
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      }
    }
  }
};

export const ExecuteDataFlowActivityTypePropertiesCompute: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ExecuteDataFlowActivityTypePropertiesCompute",
    modelProperties: {
      computeType: {
        serializedName: "computeType",
        type: {
          name: "String"
        }
      },
      coreCount: {
        serializedName: "coreCount",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ScheduleTriggerRecurrence: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ScheduleTriggerRecurrence",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      frequency: {
        serializedName: "frequency",
        type: {
          name: "String"
        }
      },
      interval: {
        serializedName: "interval",
        type: {
          name: "Number"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "DateTime"
        }
      },
      timeZone: {
        serializedName: "timeZone",
        type: {
          name: "String"
        }
      },
      schedule: {
        serializedName: "schedule",
        type: {
          name: "Composite",
          className: "RecurrenceSchedule"
        }
      }
    }
  }
};

export const RecurrenceSchedule: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecurrenceSchedule",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      minutes: {
        serializedName: "minutes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      hours: {
        serializedName: "hours",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      weekDays: {
        serializedName: "weekDays",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Enum",
              allowedValues: [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ]
            }
          }
        }
      },
      monthDays: {
        serializedName: "monthDays",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Number"
            }
          }
        }
      },
      monthlyOccurrences: {
        serializedName: "monthlyOccurrences",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RecurrenceScheduleOccurrence"
            }
          }
        }
      }
    }
  }
};

export const RecurrenceScheduleOccurrence: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RecurrenceScheduleOccurrence",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      day: {
        serializedName: "day",
        type: {
          name: "Enum",
          allowedValues: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ]
        }
      },
      occurrence: {
        serializedName: "occurrence",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const RetryPolicy: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RetryPolicy",
    modelProperties: {
      count: {
        serializedName: "count",
        type: {
          name: "any"
        }
      },
      intervalInSeconds: {
        constraints: {
          InclusiveMaximum: 86400,
          InclusiveMinimum: 30
        },
        serializedName: "intervalInSeconds",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DependencyReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DependencyReference",
    uberParent: "DependencyReference",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TriggerReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerReference",
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeComputeProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeComputeProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      nodeSize: {
        serializedName: "nodeSize",
        type: {
          name: "String"
        }
      },
      numberOfNodes: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "numberOfNodes",
        type: {
          name: "Number"
        }
      },
      maxParallelExecutionsPerNode: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "maxParallelExecutionsPerNode",
        type: {
          name: "Number"
        }
      },
      dataFlowProperties: {
        serializedName: "dataFlowProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeDataFlowProperties"
        }
      },
      vNetProperties: {
        serializedName: "vNetProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeVNetProperties"
        }
      }
    }
  }
};

export const IntegrationRuntimeDataFlowProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeDataFlowProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      computeType: {
        serializedName: "computeType",
        type: {
          name: "String"
        }
      },
      coreCount: {
        serializedName: "coreCount",
        type: {
          name: "Number"
        }
      },
      timeToLive: {
        constraints: {
          InclusiveMinimum: 0
        },
        serializedName: "timeToLive",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const IntegrationRuntimeVNetProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeVNetProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      vNetId: {
        serializedName: "vNetId",
        type: {
          name: "String"
        }
      },
      subnet: {
        serializedName: "subnet",
        type: {
          name: "String"
        }
      },
      publicIPs: {
        serializedName: "publicIPs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const IntegrationRuntimeSsisProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeSsisProperties",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      catalogInfo: {
        serializedName: "catalogInfo",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeSsisCatalogInfo"
        }
      },
      licenseType: {
        serializedName: "licenseType",
        type: {
          name: "String"
        }
      },
      customSetupScriptProperties: {
        serializedName: "customSetupScriptProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeCustomSetupScriptProperties"
        }
      },
      dataProxyProperties: {
        serializedName: "dataProxyProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeDataProxyProperties"
        }
      },
      edition: {
        serializedName: "edition",
        type: {
          name: "String"
        }
      },
      expressCustomSetupProperties: {
        serializedName: "expressCustomSetupProperties",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "CustomSetupBase"
            }
          }
        }
      }
    }
  }
};

export const IntegrationRuntimeSsisCatalogInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeSsisCatalogInfo",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      catalogServerEndpoint: {
        serializedName: "catalogServerEndpoint",
        type: {
          name: "String"
        }
      },
      catalogAdminUserName: {
        constraints: {
          MaxLength: 128,
          MinLength: 1
        },
        serializedName: "catalogAdminUserName",
        type: {
          name: "String"
        }
      },
      catalogAdminPassword: {
        serializedName: "catalogAdminPassword",
        type: {
          name: "Composite",
          className: "SecureString"
        }
      },
      catalogPricingTier: {
        serializedName: "catalogPricingTier",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const IntegrationRuntimeCustomSetupScriptProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeCustomSetupScriptProperties",
    modelProperties: {
      blobContainerUri: {
        serializedName: "blobContainerUri",
        type: {
          name: "String"
        }
      },
      sasToken: {
        serializedName: "sasToken",
        type: {
          name: "Composite",
          className: "SecureString"
        }
      }
    }
  }
};

export const IntegrationRuntimeDataProxyProperties: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeDataProxyProperties",
    modelProperties: {
      connectVia: {
        serializedName: "connectVia",
        type: {
          name: "Composite",
          className: "EntityReference"
        }
      },
      stagingLinkedService: {
        serializedName: "stagingLinkedService",
        type: {
          name: "Composite",
          className: "EntityReference"
        }
      },
      path: {
        serializedName: "path",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EntityReference: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "EntityReference",
    modelProperties: {
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      referenceName: {
        serializedName: "referenceName",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CustomSetupBase: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "CustomSetupBase",
    uberParent: "CustomSetupBase",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      type: {
        serializedName: "type",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedIntegrationRuntimeType: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedIntegrationRuntimeType",
    uberParent: "LinkedIntegrationRuntimeType",
    polymorphicDiscriminator: {
      serializedName: "authorizationType",
      clientName: "authorizationType"
    },
    modelProperties: {
      authorizationType: {
        serializedName: "authorizationType",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureStorageLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureStorage",
  type: {
    name: "Composite",
    className: "AzureStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      sasUri: {
        serializedName: "typeProperties.sasUri",
        type: {
          name: "any"
        }
      },
      sasToken: {
        serializedName: "typeProperties.sasToken",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureBlobStorageLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureBlobStorage",
  type: {
    name: "Composite",
    className: "AzureBlobStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      sasUri: {
        serializedName: "typeProperties.sasUri",
        type: {
          name: "any"
        }
      },
      sasToken: {
        serializedName: "typeProperties.sasToken",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      serviceEndpoint: {
        serializedName: "typeProperties.serviceEndpoint",
        type: {
          name: "String"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureTableStorageLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureTableStorage",
  type: {
    name: "Composite",
    className: "AzureTableStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      sasUri: {
        serializedName: "typeProperties.sasUri",
        type: {
          name: "any"
        }
      },
      sasToken: {
        serializedName: "typeProperties.sasToken",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureSqlDWLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureSqlDW",
  type: {
    name: "Composite",
    className: "AzureSqlDWLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SqlServerLinkedService: coreHttp.CompositeMapper = {
  serializedName: "SqlServer",
  type: {
    name: "Composite",
    className: "SqlServerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureSqlDatabaseLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureSqlDatabase",
  type: {
    name: "Composite",
    className: "AzureSqlDatabaseLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureSqlMILinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureSqlMI",
  type: {
    name: "Composite",
    className: "AzureSqlMILinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureBatchLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureBatch",
  type: {
    name: "Composite",
    className: "AzureBatchLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      accountName: {
        serializedName: "typeProperties.accountName",
        required: true,
        type: {
          name: "any"
        }
      },
      accessKey: {
        serializedName: "typeProperties.accessKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      batchUri: {
        serializedName: "typeProperties.batchUri",
        required: true,
        type: {
          name: "any"
        }
      },
      poolName: {
        serializedName: "typeProperties.poolName",
        required: true,
        type: {
          name: "any"
        }
      },
      linkedServiceName: {
        serializedName: "typeProperties.linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureKeyVaultLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureKeyVault",
  type: {
    name: "Composite",
    className: "AzureKeyVaultLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      baseUrl: {
        serializedName: "typeProperties.baseUrl",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CosmosDbLinkedService: coreHttp.CompositeMapper = {
  serializedName: "CosmosDb",
  type: {
    name: "Composite",
    className: "CosmosDbLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      accountEndpoint: {
        serializedName: "typeProperties.accountEndpoint",
        type: {
          name: "any"
        }
      },
      database: {
        serializedName: "typeProperties.database",
        type: {
          name: "any"
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Dynamics",
  type: {
    name: "Composite",
    className: "DynamicsLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      deploymentType: {
        serializedName: "typeProperties.deploymentType",
        required: true,
        type: {
          name: "String"
        }
      },
      hostName: {
        serializedName: "typeProperties.hostName",
        type: {
          name: "String"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "String"
        }
      },
      serviceUri: {
        serializedName: "typeProperties.serviceUri",
        type: {
          name: "String"
        }
      },
      organizationName: {
        serializedName: "typeProperties.organizationName",
        type: {
          name: "String"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalCredentialType: {
        serializedName: "typeProperties.servicePrincipalCredentialType",
        type: {
          name: "String"
        }
      },
      servicePrincipalCredential: {
        serializedName: "typeProperties.servicePrincipalCredential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsCrmLinkedService: coreHttp.CompositeMapper = {
  serializedName: "DynamicsCrm",
  type: {
    name: "Composite",
    className: "DynamicsCrmLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      deploymentType: {
        serializedName: "typeProperties.deploymentType",
        required: true,
        type: {
          name: "String"
        }
      },
      hostName: {
        serializedName: "typeProperties.hostName",
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      serviceUri: {
        serializedName: "typeProperties.serviceUri",
        type: {
          name: "any"
        }
      },
      organizationName: {
        serializedName: "typeProperties.organizationName",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalCredentialType: {
        serializedName: "typeProperties.servicePrincipalCredentialType",
        type: {
          name: "String"
        }
      },
      servicePrincipalCredential: {
        serializedName: "typeProperties.servicePrincipalCredential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CommonDataServiceForAppsLinkedService: coreHttp.CompositeMapper = {
  serializedName: "CommonDataServiceForApps",
  type: {
    name: "Composite",
    className: "CommonDataServiceForAppsLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      deploymentType: {
        serializedName: "typeProperties.deploymentType",
        required: true,
        type: {
          name: "String"
        }
      },
      hostName: {
        serializedName: "typeProperties.hostName",
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      serviceUri: {
        serializedName: "typeProperties.serviceUri",
        type: {
          name: "any"
        }
      },
      organizationName: {
        serializedName: "typeProperties.organizationName",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalCredentialType: {
        serializedName: "typeProperties.servicePrincipalCredentialType",
        type: {
          name: "String"
        }
      },
      servicePrincipalCredential: {
        serializedName: "typeProperties.servicePrincipalCredential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HDInsightLinkedService: coreHttp.CompositeMapper = {
  serializedName: "HDInsight",
  type: {
    name: "Composite",
    className: "HDInsightLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      clusterUri: {
        serializedName: "typeProperties.clusterUri",
        required: true,
        type: {
          name: "any"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      linkedServiceName: {
        serializedName: "typeProperties.linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      hcatalogLinkedServiceName: {
        serializedName: "typeProperties.hcatalogLinkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      },
      isEspEnabled: {
        serializedName: "typeProperties.isEspEnabled",
        type: {
          name: "any"
        }
      },
      fileSystem: {
        serializedName: "typeProperties.fileSystem",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const FileServerLinkedService: coreHttp.CompositeMapper = {
  serializedName: "FileServer",
  type: {
    name: "Composite",
    className: "FileServerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      userId: {
        serializedName: "typeProperties.userId",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureFileStorageLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureFileStorage",
  type: {
    name: "Composite",
    className: "AzureFileStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      userId: {
        serializedName: "typeProperties.userId",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GoogleCloudStorageLinkedService: coreHttp.CompositeMapper = {
  serializedName: "GoogleCloudStorage",
  type: {
    name: "Composite",
    className: "GoogleCloudStorageLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      accessKeyId: {
        serializedName: "typeProperties.accessKeyId",
        type: {
          name: "any"
        }
      },
      secretAccessKey: {
        serializedName: "typeProperties.secretAccessKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      serviceUrl: {
        serializedName: "typeProperties.serviceUrl",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const OracleLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Oracle",
  type: {
    name: "Composite",
    className: "OracleLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureMySqlLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureMySql",
  type: {
    name: "Composite",
    className: "AzureMySqlLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MySqlLinkedService: coreHttp.CompositeMapper = {
  serializedName: "MySql",
  type: {
    name: "Composite",
    className: "MySqlLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PostgreSqlLinkedService: coreHttp.CompositeMapper = {
  serializedName: "PostgreSql",
  type: {
    name: "Composite",
    className: "PostgreSqlLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SybaseLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Sybase",
  type: {
    name: "Composite",
    className: "SybaseLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "any"
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "any"
        }
      },
      schema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const Db2LinkedService: coreHttp.CompositeMapper = {
  serializedName: "Db2",
  type: {
    name: "Composite",
    className: "Db2LinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "any"
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      packageCollection: {
        serializedName: "typeProperties.packageCollection",
        type: {
          name: "any"
        }
      },
      certificateCommonName: {
        serializedName: "typeProperties.certificateCommonName",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const TeradataLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Teradata",
  type: {
    name: "Composite",
    className: "TeradataLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      server: {
        serializedName: "typeProperties.server",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureMLLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureML",
  type: {
    name: "Composite",
    className: "AzureMLLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      mlEndpoint: {
        serializedName: "typeProperties.mlEndpoint",
        required: true,
        type: {
          name: "any"
        }
      },
      apiKey: {
        serializedName: "typeProperties.apiKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      updateResourceEndpoint: {
        serializedName: "typeProperties.updateResourceEndpoint",
        type: {
          name: "any"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureMLServiceLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureMLService",
  type: {
    name: "Composite",
    className: "AzureMLServiceLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      subscriptionId: {
        serializedName: "typeProperties.subscriptionId",
        required: true,
        type: {
          name: "any"
        }
      },
      resourceGroupName: {
        serializedName: "typeProperties.resourceGroupName",
        required: true,
        type: {
          name: "any"
        }
      },
      mlWorkspaceName: {
        serializedName: "typeProperties.mlWorkspaceName",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const OdbcLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Odbc",
  type: {
    name: "Composite",
    className: "OdbcLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "any"
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const InformixLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Informix",
  type: {
    name: "Composite",
    className: "InformixLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "any"
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MicrosoftAccessLinkedService: coreHttp.CompositeMapper = {
  serializedName: "MicrosoftAccess",
  type: {
    name: "Composite",
    className: "MicrosoftAccessLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "any"
        }
      },
      credential: {
        serializedName: "typeProperties.credential",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HdfsLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Hdfs",
  type: {
    name: "Composite",
    className: "HdfsLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      }
    }
  }
};

export const ODataLinkedService: coreHttp.CompositeMapper = {
  serializedName: "OData",
  type: {
    name: "Composite",
    className: "ODataLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "any"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      aadResourceId: {
        serializedName: "typeProperties.aadResourceId",
        type: {
          name: "any"
        }
      },
      aadServicePrincipalCredentialType: {
        serializedName: "typeProperties.aadServicePrincipalCredentialType",
        type: {
          name: "String"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalEmbeddedCert: {
        serializedName: "typeProperties.servicePrincipalEmbeddedCert",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalEmbeddedCertPassword: {
        serializedName: "typeProperties.servicePrincipalEmbeddedCertPassword",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const WebLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Web",
  type: {
    name: "Composite",
    className: "WebLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      typeProperties: {
        serializedName: "typeProperties",
        type: {
          name: "Composite",
          className: "WebLinkedServiceTypeProperties"
        }
      }
    }
  }
};

export const CassandraLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Cassandra",
  type: {
    name: "Composite",
    className: "CassandraLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MongoDbLinkedService: coreHttp.CompositeMapper = {
  serializedName: "MongoDb",
  type: {
    name: "Composite",
    className: "MongoDbLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      databaseName: {
        serializedName: "typeProperties.databaseName",
        required: true,
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      authSource: {
        serializedName: "typeProperties.authSource",
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "any"
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MongoDbV2LinkedService: coreHttp.CompositeMapper = {
  serializedName: "MongoDbV2",
  type: {
    name: "Composite",
    className: "MongoDbV2LinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CosmosDbMongoDbApiLinkedService: coreHttp.CompositeMapper = {
  serializedName: "CosmosDbMongoDbApi",
  type: {
    name: "Composite",
    className: "CosmosDbMongoDbApiLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        required: true,
        type: {
          name: "any"
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDataLakeStoreLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureDataLakeStore",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      dataLakeStoreUri: {
        serializedName: "typeProperties.dataLakeStoreUri",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "any"
        }
      },
      accountName: {
        serializedName: "typeProperties.accountName",
        type: {
          name: "any"
        }
      },
      subscriptionId: {
        serializedName: "typeProperties.subscriptionId",
        type: {
          name: "any"
        }
      },
      resourceGroupName: {
        serializedName: "typeProperties.resourceGroupName",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureBlobFSLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureBlobFS",
  type: {
    name: "Composite",
    className: "AzureBlobFSLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "any"
        }
      },
      accountKey: {
        serializedName: "typeProperties.accountKey",
        type: {
          name: "any"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const Office365LinkedService: coreHttp.CompositeMapper = {
  serializedName: "Office365",
  type: {
    name: "Composite",
    className: "Office365LinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      office365TenantId: {
        serializedName: "typeProperties.office365TenantId",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalTenantId: {
        serializedName: "typeProperties.servicePrincipalTenantId",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Salesforce",
  type: {
    name: "Composite",
    className: "SalesforceLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      environmentUrl: {
        serializedName: "typeProperties.environmentUrl",
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      securityToken: {
        serializedName: "typeProperties.securityToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceServiceCloudLinkedService: coreHttp.CompositeMapper = {
  serializedName: "SalesforceServiceCloud",
  type: {
    name: "Composite",
    className: "SalesforceServiceCloudLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      environmentUrl: {
        serializedName: "typeProperties.environmentUrl",
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      securityToken: {
        serializedName: "typeProperties.securityToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      extendedProperties: {
        serializedName: "typeProperties.extendedProperties",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapCloudForCustomerLinkedService: coreHttp.CompositeMapper = {
  serializedName: "SapCloudForCustomer",
  type: {
    name: "Composite",
    className: "SapCloudForCustomerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapEccLinkedService: coreHttp.CompositeMapper = {
  serializedName: "SapEcc",
  type: {
    name: "Composite",
    className: "SapEccLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "String"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SapOpenHubLinkedService: coreHttp.CompositeMapper = {
  serializedName: "SapOpenHub",
  type: {
    name: "Composite",
    className: "SapOpenHubLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "any"
        }
      },
      systemNumber: {
        serializedName: "typeProperties.systemNumber",
        required: true,
        type: {
          name: "any"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "any"
        }
      },
      language: {
        serializedName: "typeProperties.language",
        type: {
          name: "any"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RestServiceLinkedService: coreHttp.CompositeMapper = {
  serializedName: "RestService",
  type: {
    name: "Composite",
    className: "RestServiceLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "any"
        }
      },
      enableServerCertificateValidation: {
        serializedName: "typeProperties.enableServerCertificateValidation",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        type: {
          name: "any"
        }
      },
      aadResourceId: {
        serializedName: "typeProperties.aadResourceId",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AmazonS3LinkedService: coreHttp.CompositeMapper = {
  serializedName: "AmazonS3",
  type: {
    name: "Composite",
    className: "AmazonS3LinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      accessKeyId: {
        serializedName: "typeProperties.accessKeyId",
        type: {
          name: "any"
        }
      },
      secretAccessKey: {
        serializedName: "typeProperties.secretAccessKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      serviceUrl: {
        serializedName: "typeProperties.serviceUrl",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AmazonRedshiftLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AmazonRedshift",
  type: {
    name: "Composite",
    className: "AmazonRedshiftLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CustomDataSourceLinkedService: coreHttp.CompositeMapper = {
  serializedName: "CustomDataSource",
  type: {
    name: "Composite",
    className: "CustomDataSourceLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      typeProperties: {
        serializedName: "typeProperties",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureSearchLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureSearch",
  type: {
    name: "Composite",
    className: "AzureSearchLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "any"
        }
      },
      key: {
        serializedName: "typeProperties.key",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HttpLinkedService: coreHttp.CompositeMapper = {
  serializedName: "HttpServer",
  type: {
    name: "Composite",
    className: "HttpLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      embeddedCertData: {
        serializedName: "typeProperties.embeddedCertData",
        type: {
          name: "any"
        }
      },
      certThumbprint: {
        serializedName: "typeProperties.certThumbprint",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      },
      enableServerCertificateValidation: {
        serializedName: "typeProperties.enableServerCertificateValidation",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const FtpServerLinkedService: coreHttp.CompositeMapper = {
  serializedName: "FtpServer",
  type: {
    name: "Composite",
    className: "FtpServerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "any"
        }
      },
      enableServerCertificateValidation: {
        serializedName: "typeProperties.enableServerCertificateValidation",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SftpServerLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Sftp",
  type: {
    name: "Composite",
    className: "SftpServerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      },
      privateKeyPath: {
        serializedName: "typeProperties.privateKeyPath",
        type: {
          name: "any"
        }
      },
      privateKeyContent: {
        serializedName: "typeProperties.privateKeyContent",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      passPhrase: {
        serializedName: "typeProperties.passPhrase",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      skipHostKeyValidation: {
        serializedName: "typeProperties.skipHostKeyValidation",
        type: {
          name: "any"
        }
      },
      hostKeyFingerprint: {
        serializedName: "typeProperties.hostKeyFingerprint",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapBWLinkedService: coreHttp.CompositeMapper = {
  serializedName: "SapBW",
  type: {
    name: "Composite",
    className: "SapBWLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "any"
        }
      },
      systemNumber: {
        serializedName: "typeProperties.systemNumber",
        required: true,
        type: {
          name: "any"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "any"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapHanaLinkedService: coreHttp.CompositeMapper = {
  serializedName: "SapHana",
  type: {
    name: "Composite",
    className: "SapHanaLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      server: {
        serializedName: "typeProperties.server",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        type: {
          name: "String"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AmazonMWSLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AmazonMWS",
  type: {
    name: "Composite",
    className: "AmazonMWSLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "any"
        }
      },
      marketplaceID: {
        serializedName: "typeProperties.marketplaceID",
        required: true,
        type: {
          name: "any"
        }
      },
      sellerID: {
        serializedName: "typeProperties.sellerID",
        required: true,
        type: {
          name: "any"
        }
      },
      mwsAuthToken: {
        serializedName: "typeProperties.mwsAuthToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      accessKeyId: {
        serializedName: "typeProperties.accessKeyId",
        required: true,
        type: {
          name: "any"
        }
      },
      secretKey: {
        serializedName: "typeProperties.secretKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzurePostgreSqlLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzurePostgreSql",
  type: {
    name: "Composite",
    className: "AzurePostgreSqlLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ConcurLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Concur",
  type: {
    name: "Composite",
    className: "ConcurLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CouchbaseLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Couchbase",
  type: {
    name: "Composite",
    className: "CouchbaseLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      credString: {
        serializedName: "typeProperties.credString",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DrillLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Drill",
  type: {
    name: "Composite",
    className: "DrillLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const EloquaLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Eloqua",
  type: {
    name: "Composite",
    className: "EloquaLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GoogleBigQueryLinkedService: coreHttp.CompositeMapper = {
  serializedName: "GoogleBigQuery",
  type: {
    name: "Composite",
    className: "GoogleBigQueryLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      project: {
        serializedName: "typeProperties.project",
        required: true,
        type: {
          name: "any"
        }
      },
      additionalProjects: {
        serializedName: "typeProperties.additionalProjects",
        type: {
          name: "any"
        }
      },
      requestGoogleDriveScope: {
        serializedName: "typeProperties.requestGoogleDriveScope",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      refreshToken: {
        serializedName: "typeProperties.refreshToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "any"
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      email: {
        serializedName: "typeProperties.email",
        type: {
          name: "any"
        }
      },
      keyFilePath: {
        serializedName: "typeProperties.keyFilePath",
        type: {
          name: "any"
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "any"
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GreenplumLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Greenplum",
  type: {
    name: "Composite",
    className: "GreenplumLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HBaseLinkedService: coreHttp.CompositeMapper = {
  serializedName: "HBase",
  type: {
    name: "Composite",
    className: "HBaseLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      httpPath: {
        serializedName: "typeProperties.httpPath",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "any"
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "any"
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "any"
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HiveLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Hive",
  type: {
    name: "Composite",
    className: "HiveLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      serverType: {
        serializedName: "typeProperties.serverType",
        type: {
          name: "String"
        }
      },
      thriftTransportProtocol: {
        serializedName: "typeProperties.thriftTransportProtocol",
        type: {
          name: "String"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      serviceDiscoveryMode: {
        serializedName: "typeProperties.serviceDiscoveryMode",
        type: {
          name: "any"
        }
      },
      zooKeeperNameSpace: {
        serializedName: "typeProperties.zooKeeperNameSpace",
        type: {
          name: "any"
        }
      },
      useNativeQuery: {
        serializedName: "typeProperties.useNativeQuery",
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      httpPath: {
        serializedName: "typeProperties.httpPath",
        type: {
          name: "any"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "any"
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "any"
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "any"
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "any"
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HubspotLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Hubspot",
  type: {
    name: "Composite",
    className: "HubspotLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "any"
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      refreshToken: {
        serializedName: "typeProperties.refreshToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ImpalaLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Impala",
  type: {
    name: "Composite",
    className: "ImpalaLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "any"
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "any"
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "any"
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "any"
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const JiraLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Jira",
  type: {
    name: "Composite",
    className: "JiraLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MagentoLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Magento",
  type: {
    name: "Composite",
    className: "MagentoLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MariaDBLinkedService: coreHttp.CompositeMapper = {
  serializedName: "MariaDB",
  type: {
    name: "Composite",
    className: "MariaDBLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureMariaDBLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureMariaDB",
  type: {
    name: "Composite",
    className: "AzureMariaDBLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MarketoLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Marketo",
  type: {
    name: "Composite",
    className: "MarketoLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "any"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "any"
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PaypalLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Paypal",
  type: {
    name: "Composite",
    className: "PaypalLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "any"
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PhoenixLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Phoenix",
  type: {
    name: "Composite",
    className: "PhoenixLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      httpPath: {
        serializedName: "typeProperties.httpPath",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "any"
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "any"
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "any"
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "any"
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PrestoLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Presto",
  type: {
    name: "Composite",
    className: "PrestoLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      serverVersion: {
        serializedName: "typeProperties.serverVersion",
        required: true,
        type: {
          name: "any"
        }
      },
      catalog: {
        serializedName: "typeProperties.catalog",
        required: true,
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "any"
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "any"
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "any"
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "any"
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "any"
        }
      },
      timeZoneID: {
        serializedName: "typeProperties.timeZoneID",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const QuickBooksLinkedService: coreHttp.CompositeMapper = {
  serializedName: "QuickBooks",
  type: {
    name: "Composite",
    className: "QuickBooksLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "any"
        }
      },
      companyId: {
        serializedName: "typeProperties.companyId",
        required: true,
        type: {
          name: "any"
        }
      },
      consumerKey: {
        serializedName: "typeProperties.consumerKey",
        required: true,
        type: {
          name: "any"
        }
      },
      consumerSecret: {
        serializedName: "typeProperties.consumerSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      accessTokenSecret: {
        serializedName: "typeProperties.accessTokenSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ServiceNowLinkedService: coreHttp.CompositeMapper = {
  serializedName: "ServiceNow",
  type: {
    name: "Composite",
    className: "ServiceNowLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "any"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "any"
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ShopifyLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Shopify",
  type: {
    name: "Composite",
    className: "ShopifyLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SparkLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Spark",
  type: {
    name: "Composite",
    className: "SparkLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      port: {
        serializedName: "typeProperties.port",
        required: true,
        type: {
          name: "any"
        }
      },
      serverType: {
        serializedName: "typeProperties.serverType",
        type: {
          name: "String"
        }
      },
      thriftTransportProtocol: {
        serializedName: "typeProperties.thriftTransportProtocol",
        type: {
          name: "String"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      httpPath: {
        serializedName: "typeProperties.httpPath",
        type: {
          name: "any"
        }
      },
      enableSsl: {
        serializedName: "typeProperties.enableSsl",
        type: {
          name: "any"
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "any"
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "any"
        }
      },
      allowHostNameCNMismatch: {
        serializedName: "typeProperties.allowHostNameCNMismatch",
        type: {
          name: "any"
        }
      },
      allowSelfSignedServerCert: {
        serializedName: "typeProperties.allowSelfSignedServerCert",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SquareLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Square",
  type: {
    name: "Composite",
    className: "SquareLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "any"
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      redirectUri: {
        serializedName: "typeProperties.redirectUri",
        required: true,
        type: {
          name: "any"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const XeroLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Xero",
  type: {
    name: "Composite",
    className: "XeroLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      consumerKey: {
        serializedName: "typeProperties.consumerKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      privateKey: {
        serializedName: "typeProperties.privateKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ZohoLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Zoho",
  type: {
    name: "Composite",
    className: "ZohoLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "any"
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const VerticaLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Vertica",
  type: {
    name: "Composite",
    className: "VerticaLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const NetezzaLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Netezza",
  type: {
    name: "Composite",
    className: "NetezzaLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      connectionString: {
        serializedName: "typeProperties.connectionString",
        type: {
          name: "any"
        }
      },
      pwd: {
        serializedName: "typeProperties.pwd",
        type: {
          name: "Composite",
          className: "AzureKeyVaultSecretReference"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceMarketingCloudLinkedService: coreHttp.CompositeMapper = {
  serializedName: "SalesforceMarketingCloud",
  type: {
    name: "Composite",
    className: "SalesforceMarketingCloudLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "any"
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HDInsightOnDemandLinkedService: coreHttp.CompositeMapper = {
  serializedName: "HDInsightOnDemand",
  type: {
    name: "Composite",
    className: "HDInsightOnDemandLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      clusterSize: {
        serializedName: "typeProperties.clusterSize",
        required: true,
        type: {
          name: "any"
        }
      },
      timeToLive: {
        serializedName: "typeProperties.timeToLive",
        required: true,
        type: {
          name: "any"
        }
      },
      version: {
        serializedName: "typeProperties.version",
        required: true,
        type: {
          name: "any"
        }
      },
      linkedServiceName: {
        serializedName: "typeProperties.linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      hostSubscriptionId: {
        serializedName: "typeProperties.hostSubscriptionId",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        required: true,
        type: {
          name: "any"
        }
      },
      clusterResourceGroup: {
        serializedName: "typeProperties.clusterResourceGroup",
        required: true,
        type: {
          name: "any"
        }
      },
      clusterNamePrefix: {
        serializedName: "typeProperties.clusterNamePrefix",
        type: {
          name: "any"
        }
      },
      clusterUserName: {
        serializedName: "typeProperties.clusterUserName",
        type: {
          name: "any"
        }
      },
      clusterPassword: {
        serializedName: "typeProperties.clusterPassword",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      clusterSshUserName: {
        serializedName: "typeProperties.clusterSshUserName",
        type: {
          name: "any"
        }
      },
      clusterSshPassword: {
        serializedName: "typeProperties.clusterSshPassword",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      additionalLinkedServiceNames: {
        serializedName: "typeProperties.additionalLinkedServiceNames",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      hcatalogLinkedServiceName: {
        serializedName: "typeProperties.hcatalogLinkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      clusterType: {
        serializedName: "typeProperties.clusterType",
        type: {
          name: "any"
        }
      },
      sparkVersion: {
        serializedName: "typeProperties.sparkVersion",
        type: {
          name: "any"
        }
      },
      coreConfiguration: {
        serializedName: "typeProperties.coreConfiguration",
        type: {
          name: "any"
        }
      },
      hBaseConfiguration: {
        serializedName: "typeProperties.hBaseConfiguration",
        type: {
          name: "any"
        }
      },
      hdfsConfiguration: {
        serializedName: "typeProperties.hdfsConfiguration",
        type: {
          name: "any"
        }
      },
      hiveConfiguration: {
        serializedName: "typeProperties.hiveConfiguration",
        type: {
          name: "any"
        }
      },
      mapReduceConfiguration: {
        serializedName: "typeProperties.mapReduceConfiguration",
        type: {
          name: "any"
        }
      },
      oozieConfiguration: {
        serializedName: "typeProperties.oozieConfiguration",
        type: {
          name: "any"
        }
      },
      stormConfiguration: {
        serializedName: "typeProperties.stormConfiguration",
        type: {
          name: "any"
        }
      },
      yarnConfiguration: {
        serializedName: "typeProperties.yarnConfiguration",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      },
      headNodeSize: {
        serializedName: "typeProperties.headNodeSize",
        type: {
          name: "any"
        }
      },
      dataNodeSize: {
        serializedName: "typeProperties.dataNodeSize",
        type: {
          name: "any"
        }
      },
      zookeeperNodeSize: {
        serializedName: "typeProperties.zookeeperNodeSize",
        type: {
          name: "any"
        }
      },
      scriptActions: {
        serializedName: "typeProperties.scriptActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ScriptAction"
            }
          }
        }
      },
      virtualNetworkId: {
        serializedName: "typeProperties.virtualNetworkId",
        type: {
          name: "any"
        }
      },
      subnetName: {
        serializedName: "typeProperties.subnetName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDataLakeAnalyticsLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureDataLakeAnalytics",
  type: {
    name: "Composite",
    className: "AzureDataLakeAnalyticsLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      accountName: {
        serializedName: "typeProperties.accountName",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        required: true,
        type: {
          name: "any"
        }
      },
      subscriptionId: {
        serializedName: "typeProperties.subscriptionId",
        type: {
          name: "any"
        }
      },
      resourceGroupName: {
        serializedName: "typeProperties.resourceGroupName",
        type: {
          name: "any"
        }
      },
      dataLakeAnalyticsUri: {
        serializedName: "typeProperties.dataLakeAnalyticsUri",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDatabricksLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureDatabricks",
  type: {
    name: "Composite",
    className: "AzureDatabricksLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      domain: {
        serializedName: "typeProperties.domain",
        required: true,
        type: {
          name: "any"
        }
      },
      accessToken: {
        serializedName: "typeProperties.accessToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      existingClusterId: {
        serializedName: "typeProperties.existingClusterId",
        type: {
          name: "any"
        }
      },
      instancePoolId: {
        serializedName: "typeProperties.instancePoolId",
        type: {
          name: "any"
        }
      },
      newClusterVersion: {
        serializedName: "typeProperties.newClusterVersion",
        type: {
          name: "any"
        }
      },
      newClusterNumOfWorker: {
        serializedName: "typeProperties.newClusterNumOfWorker",
        type: {
          name: "any"
        }
      },
      newClusterNodeType: {
        serializedName: "typeProperties.newClusterNodeType",
        type: {
          name: "any"
        }
      },
      newClusterSparkConf: {
        serializedName: "typeProperties.newClusterSparkConf",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      newClusterSparkEnvVars: {
        serializedName: "typeProperties.newClusterSparkEnvVars",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      newClusterCustomTags: {
        serializedName: "typeProperties.newClusterCustomTags",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      newClusterDriverNodeType: {
        serializedName: "typeProperties.newClusterDriverNodeType",
        type: {
          name: "any"
        }
      },
      newClusterInitScripts: {
        serializedName: "typeProperties.newClusterInitScripts",
        type: {
          name: "any"
        }
      },
      newClusterEnableElasticDisk: {
        serializedName: "typeProperties.newClusterEnableElasticDisk",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ResponsysLinkedService: coreHttp.CompositeMapper = {
  serializedName: "Responsys",
  type: {
    name: "Composite",
    className: "ResponsysLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "any"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        required: true,
        type: {
          name: "any"
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsAXLinkedService: coreHttp.CompositeMapper = {
  serializedName: "DynamicsAX",
  type: {
    name: "Composite",
    className: "DynamicsAXLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        required: true,
        type: {
          name: "any"
        }
      },
      aadResourceId: {
        serializedName: "typeProperties.aadResourceId",
        required: true,
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const OracleServiceCloudLinkedService: coreHttp.CompositeMapper = {
  serializedName: "OracleServiceCloud",
  type: {
    name: "Composite",
    className: "OracleServiceCloudLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      host: {
        serializedName: "typeProperties.host",
        required: true,
        type: {
          name: "any"
        }
      },
      username: {
        serializedName: "typeProperties.username",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      useEncryptedEndpoints: {
        serializedName: "typeProperties.useEncryptedEndpoints",
        type: {
          name: "any"
        }
      },
      useHostVerification: {
        serializedName: "typeProperties.useHostVerification",
        type: {
          name: "any"
        }
      },
      usePeerVerification: {
        serializedName: "typeProperties.usePeerVerification",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GoogleAdWordsLinkedService: coreHttp.CompositeMapper = {
  serializedName: "GoogleAdWords",
  type: {
    name: "Composite",
    className: "GoogleAdWordsLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      clientCustomerID: {
        serializedName: "typeProperties.clientCustomerID",
        required: true,
        type: {
          name: "any"
        }
      },
      developerToken: {
        serializedName: "typeProperties.developerToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      authenticationType: {
        serializedName: "typeProperties.authenticationType",
        required: true,
        type: {
          name: "String"
        }
      },
      refreshToken: {
        serializedName: "typeProperties.refreshToken",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "any"
        }
      },
      clientSecret: {
        serializedName: "typeProperties.clientSecret",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      email: {
        serializedName: "typeProperties.email",
        type: {
          name: "any"
        }
      },
      keyFilePath: {
        serializedName: "typeProperties.keyFilePath",
        type: {
          name: "any"
        }
      },
      trustedCertPath: {
        serializedName: "typeProperties.trustedCertPath",
        type: {
          name: "any"
        }
      },
      useSystemTrustStore: {
        serializedName: "typeProperties.useSystemTrustStore",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapTableLinkedService: coreHttp.CompositeMapper = {
  serializedName: "SapTable",
  type: {
    name: "Composite",
    className: "SapTableLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      server: {
        serializedName: "typeProperties.server",
        type: {
          name: "any"
        }
      },
      systemNumber: {
        serializedName: "typeProperties.systemNumber",
        type: {
          name: "any"
        }
      },
      clientId: {
        serializedName: "typeProperties.clientId",
        type: {
          name: "any"
        }
      },
      language: {
        serializedName: "typeProperties.language",
        type: {
          name: "any"
        }
      },
      systemId: {
        serializedName: "typeProperties.systemId",
        type: {
          name: "any"
        }
      },
      userName: {
        serializedName: "typeProperties.userName",
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "typeProperties.password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      messageServer: {
        serializedName: "typeProperties.messageServer",
        type: {
          name: "any"
        }
      },
      messageServerService: {
        serializedName: "typeProperties.messageServerService",
        type: {
          name: "any"
        }
      },
      sncMode: {
        serializedName: "typeProperties.sncMode",
        type: {
          name: "any"
        }
      },
      sncMyName: {
        serializedName: "typeProperties.sncMyName",
        type: {
          name: "any"
        }
      },
      sncPartnerName: {
        serializedName: "typeProperties.sncPartnerName",
        type: {
          name: "any"
        }
      },
      sncLibraryPath: {
        serializedName: "typeProperties.sncLibraryPath",
        type: {
          name: "any"
        }
      },
      sncQop: {
        serializedName: "typeProperties.sncQop",
        type: {
          name: "any"
        }
      },
      logonGroup: {
        serializedName: "typeProperties.logonGroup",
        type: {
          name: "any"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDataExplorerLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureDataExplorer",
  type: {
    name: "Composite",
    className: "AzureDataExplorerLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      endpoint: {
        serializedName: "typeProperties.endpoint",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalId: {
        serializedName: "typeProperties.servicePrincipalId",
        required: true,
        type: {
          name: "any"
        }
      },
      servicePrincipalKey: {
        serializedName: "typeProperties.servicePrincipalKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      database: {
        serializedName: "typeProperties.database",
        required: true,
        type: {
          name: "any"
        }
      },
      tenant: {
        serializedName: "typeProperties.tenant",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureFunctionLinkedService: coreHttp.CompositeMapper = {
  serializedName: "AzureFunction",
  type: {
    name: "Composite",
    className: "AzureFunctionLinkedService",
    uberParent: "LinkedService",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: LinkedService.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedService.type.modelProperties,
      functionAppUrl: {
        serializedName: "typeProperties.functionAppUrl",
        required: true,
        type: {
          name: "any"
        }
      },
      functionKey: {
        serializedName: "typeProperties.functionKey",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      encryptedCredential: {
        serializedName: "typeProperties.encryptedCredential",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureEntityResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "AzureEntityResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        serializedName: "etag",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProxyResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const TrackedResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      location: {
        serializedName: "location",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvroDataset: coreHttp.CompositeMapper = {
  serializedName: "Avro",
  type: {
    name: "Composite",
    className: "AvroDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      avroCompressionCodec: {
        serializedName: "typeProperties.avroCompressionCodec",
        type: {
          name: "String"
        }
      },
      avroCompressionLevel: {
        constraints: {
          InclusiveMaximum: 9,
          InclusiveMinimum: 1
        },
        serializedName: "typeProperties.avroCompressionLevel",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const ParquetDataset: coreHttp.CompositeMapper = {
  serializedName: "Parquet",
  type: {
    name: "Composite",
    className: "ParquetDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      compressionCodec: {
        serializedName: "typeProperties.compressionCodec",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DelimitedTextDataset: coreHttp.CompositeMapper = {
  serializedName: "DelimitedText",
  type: {
    name: "Composite",
    className: "DelimitedTextDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      columnDelimiter: {
        serializedName: "typeProperties.columnDelimiter",
        type: {
          name: "any"
        }
      },
      rowDelimiter: {
        serializedName: "typeProperties.rowDelimiter",
        type: {
          name: "any"
        }
      },
      encodingName: {
        serializedName: "typeProperties.encodingName",
        type: {
          name: "any"
        }
      },
      compressionCodec: {
        serializedName: "typeProperties.compressionCodec",
        type: {
          name: "String"
        }
      },
      compressionLevel: {
        serializedName: "typeProperties.compressionLevel",
        type: {
          name: "String"
        }
      },
      quoteChar: {
        serializedName: "typeProperties.quoteChar",
        type: {
          name: "any"
        }
      },
      escapeChar: {
        serializedName: "typeProperties.escapeChar",
        type: {
          name: "any"
        }
      },
      firstRowAsHeader: {
        serializedName: "typeProperties.firstRowAsHeader",
        type: {
          name: "any"
        }
      },
      nullValue: {
        serializedName: "typeProperties.nullValue",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const JsonDataset: coreHttp.CompositeMapper = {
  serializedName: "Json",
  type: {
    name: "Composite",
    className: "JsonDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      encodingName: {
        serializedName: "typeProperties.encodingName",
        type: {
          name: "any"
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const OrcDataset: coreHttp.CompositeMapper = {
  serializedName: "Orc",
  type: {
    name: "Composite",
    className: "OrcDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      orcCompressionCodec: {
        serializedName: "typeProperties.orcCompressionCodec",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const BinaryDataset: coreHttp.CompositeMapper = {
  serializedName: "Binary",
  type: {
    name: "Composite",
    className: "BinaryDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      location: {
        serializedName: "typeProperties.location",
        type: {
          name: "Composite",
          className: "DatasetLocation"
        }
      },
      compression: {
        serializedName: "typeProperties.compression",
        type: {
          name: "Composite",
          className: "DatasetCompression"
        }
      }
    }
  }
};

export const AzureTableDataset: coreHttp.CompositeMapper = {
  serializedName: "AzureTable",
  type: {
    name: "Composite",
    className: "AzureTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureSqlTableDataset: coreHttp.CompositeMapper = {
  serializedName: "AzureSqlTable",
  type: {
    name: "Composite",
    className: "AzureSqlTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureSqlMITableDataset: coreHttp.CompositeMapper = {
  serializedName: "AzureSqlMITable",
  type: {
    name: "Composite",
    className: "AzureSqlMITableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureSqlDWTableDataset: coreHttp.CompositeMapper = {
  serializedName: "AzureSqlDWTable",
  type: {
    name: "Composite",
    className: "AzureSqlDWTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CassandraTableDataset: coreHttp.CompositeMapper = {
  serializedName: "CassandraTable",
  type: {
    name: "Composite",
    className: "CassandraTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      keyspace: {
        serializedName: "typeProperties.keyspace",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CustomDataset: coreHttp.CompositeMapper = {
  serializedName: "CustomDataset",
  type: {
    name: "Composite",
    className: "CustomDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      typeProperties: {
        serializedName: "typeProperties",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CosmosDbSqlApiCollectionDataset: coreHttp.CompositeMapper = {
  serializedName: "CosmosDbSqlApiCollection",
  type: {
    name: "Composite",
    className: "CosmosDbSqlApiCollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collectionName: {
        serializedName: "typeProperties.collectionName",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DocumentDbCollectionDataset: coreHttp.CompositeMapper = {
  serializedName: "DocumentDbCollection",
  type: {
    name: "Composite",
    className: "DocumentDbCollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collectionName: {
        serializedName: "typeProperties.collectionName",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsEntityDataset: coreHttp.CompositeMapper = {
  serializedName: "DynamicsEntity",
  type: {
    name: "Composite",
    className: "DynamicsEntityDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      entityName: {
        serializedName: "typeProperties.entityName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsCrmEntityDataset: coreHttp.CompositeMapper = {
  serializedName: "DynamicsCrmEntity",
  type: {
    name: "Composite",
    className: "DynamicsCrmEntityDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      entityName: {
        serializedName: "typeProperties.entityName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CommonDataServiceForAppsEntityDataset: coreHttp.CompositeMapper = {
  serializedName: "CommonDataServiceForAppsEntity",
  type: {
    name: "Composite",
    className: "CommonDataServiceForAppsEntityDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      entityName: {
        serializedName: "typeProperties.entityName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const Office365Dataset: coreHttp.CompositeMapper = {
  serializedName: "Office365Table",
  type: {
    name: "Composite",
    className: "Office365Dataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        required: true,
        type: {
          name: "any"
        }
      },
      predicate: {
        serializedName: "typeProperties.predicate",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MongoDbCollectionDataset: coreHttp.CompositeMapper = {
  serializedName: "MongoDbCollection",
  type: {
    name: "Composite",
    className: "MongoDbCollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collectionName: {
        serializedName: "typeProperties.collectionName",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MongoDbV2CollectionDataset: coreHttp.CompositeMapper = {
  serializedName: "MongoDbV2Collection",
  type: {
    name: "Composite",
    className: "MongoDbV2CollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collection: {
        serializedName: "typeProperties.collection",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CosmosDbMongoDbApiCollectionDataset: coreHttp.CompositeMapper = {
  serializedName: "CosmosDbMongoDbApiCollection",
  type: {
    name: "Composite",
    className: "CosmosDbMongoDbApiCollectionDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      collection: {
        serializedName: "typeProperties.collection",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ODataResourceDataset: coreHttp.CompositeMapper = {
  serializedName: "ODataResource",
  type: {
    name: "Composite",
    className: "ODataResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      path: {
        serializedName: "typeProperties.path",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const OracleTableDataset: coreHttp.CompositeMapper = {
  serializedName: "OracleTable",
  type: {
    name: "Composite",
    className: "OracleTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const TeradataTableDataset: coreHttp.CompositeMapper = {
  serializedName: "TeradataTable",
  type: {
    name: "Composite",
    className: "TeradataTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      database: {
        serializedName: "typeProperties.database",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureMySqlTableDataset: coreHttp.CompositeMapper = {
  serializedName: "AzureMySqlTable",
  type: {
    name: "Composite",
    className: "AzureMySqlTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AmazonRedshiftTableDataset: coreHttp.CompositeMapper = {
  serializedName: "AmazonRedshiftTable",
  type: {
    name: "Composite",
    className: "AmazonRedshiftTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const Db2TableDataset: coreHttp.CompositeMapper = {
  serializedName: "Db2Table",
  type: {
    name: "Composite",
    className: "Db2TableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RelationalTableDataset: coreHttp.CompositeMapper = {
  serializedName: "RelationalTable",
  type: {
    name: "Composite",
    className: "RelationalTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const InformixTableDataset: coreHttp.CompositeMapper = {
  serializedName: "InformixTable",
  type: {
    name: "Composite",
    className: "InformixTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const OdbcTableDataset: coreHttp.CompositeMapper = {
  serializedName: "OdbcTable",
  type: {
    name: "Composite",
    className: "OdbcTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MySqlTableDataset: coreHttp.CompositeMapper = {
  serializedName: "MySqlTable",
  type: {
    name: "Composite",
    className: "MySqlTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PostgreSqlTableDataset: coreHttp.CompositeMapper = {
  serializedName: "PostgreSqlTable",
  type: {
    name: "Composite",
    className: "PostgreSqlTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MicrosoftAccessTableDataset: coreHttp.CompositeMapper = {
  serializedName: "MicrosoftAccessTable",
  type: {
    name: "Composite",
    className: "MicrosoftAccessTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "SalesforceObject",
  type: {
    name: "Composite",
    className: "SalesforceObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      objectApiName: {
        serializedName: "typeProperties.objectApiName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceServiceCloudObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "SalesforceServiceCloudObject",
  type: {
    name: "Composite",
    className: "SalesforceServiceCloudObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      objectApiName: {
        serializedName: "typeProperties.objectApiName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SybaseTableDataset: coreHttp.CompositeMapper = {
  serializedName: "SybaseTable",
  type: {
    name: "Composite",
    className: "SybaseTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapBwCubeDataset: coreHttp.CompositeMapper = {
  serializedName: "SapBwCube",
  type: {
    name: "Composite",
    className: "SapBwCubeDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties
    }
  }
};

export const SapCloudForCustomerResourceDataset: coreHttp.CompositeMapper = {
  serializedName: "SapCloudForCustomerResource",
  type: {
    name: "Composite",
    className: "SapCloudForCustomerResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      path: {
        serializedName: "typeProperties.path",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapEccResourceDataset: coreHttp.CompositeMapper = {
  serializedName: "SapEccResource",
  type: {
    name: "Composite",
    className: "SapEccResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      path: {
        serializedName: "typeProperties.path",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapHanaTableDataset: coreHttp.CompositeMapper = {
  serializedName: "SapHanaTable",
  type: {
    name: "Composite",
    className: "SapHanaTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapOpenHubTableDataset: coreHttp.CompositeMapper = {
  serializedName: "SapOpenHubTable",
  type: {
    name: "Composite",
    className: "SapOpenHubTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      openHubDestinationName: {
        serializedName: "typeProperties.openHubDestinationName",
        required: true,
        type: {
          name: "any"
        }
      },
      excludeLastRequest: {
        serializedName: "typeProperties.excludeLastRequest",
        type: {
          name: "any"
        }
      },
      baseRequestId: {
        serializedName: "typeProperties.baseRequestId",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SqlServerTableDataset: coreHttp.CompositeMapper = {
  serializedName: "SqlServerTable",
  type: {
    name: "Composite",
    className: "SqlServerTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RestResourceDataset: coreHttp.CompositeMapper = {
  serializedName: "RestResource",
  type: {
    name: "Composite",
    className: "RestResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      relativeUrl: {
        serializedName: "typeProperties.relativeUrl",
        type: {
          name: "any"
        }
      },
      requestMethod: {
        serializedName: "typeProperties.requestMethod",
        type: {
          name: "any"
        }
      },
      requestBody: {
        serializedName: "typeProperties.requestBody",
        type: {
          name: "any"
        }
      },
      additionalHeaders: {
        serializedName: "typeProperties.additionalHeaders",
        type: {
          name: "any"
        }
      },
      paginationRules: {
        serializedName: "typeProperties.paginationRules",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapTableResourceDataset: coreHttp.CompositeMapper = {
  serializedName: "SapTableResource",
  type: {
    name: "Composite",
    className: "SapTableResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const WebTableDataset: coreHttp.CompositeMapper = {
  serializedName: "WebTable",
  type: {
    name: "Composite",
    className: "WebTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      index: {
        serializedName: "typeProperties.index",
        required: true,
        type: {
          name: "any"
        }
      },
      path: {
        serializedName: "typeProperties.path",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureSearchIndexDataset: coreHttp.CompositeMapper = {
  serializedName: "AzureSearchIndex",
  type: {
    name: "Composite",
    className: "AzureSearchIndexDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      indexName: {
        serializedName: "typeProperties.indexName",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AmazonMWSObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "AmazonMWSObject",
  type: {
    name: "Composite",
    className: "AmazonMWSObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzurePostgreSqlTableDataset: coreHttp.CompositeMapper = {
  serializedName: "AzurePostgreSqlTable",
  type: {
    name: "Composite",
    className: "AzurePostgreSqlTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ConcurObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "ConcurObject",
  type: {
    name: "Composite",
    className: "ConcurObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CouchbaseTableDataset: coreHttp.CompositeMapper = {
  serializedName: "CouchbaseTable",
  type: {
    name: "Composite",
    className: "CouchbaseTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DrillTableDataset: coreHttp.CompositeMapper = {
  serializedName: "DrillTable",
  type: {
    name: "Composite",
    className: "DrillTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const EloquaObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "EloquaObject",
  type: {
    name: "Composite",
    className: "EloquaObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GoogleBigQueryObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "GoogleBigQueryObject",
  type: {
    name: "Composite",
    className: "GoogleBigQueryObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      dataset: {
        serializedName: "typeProperties.dataset",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GreenplumTableDataset: coreHttp.CompositeMapper = {
  serializedName: "GreenplumTable",
  type: {
    name: "Composite",
    className: "GreenplumTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HBaseObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "HBaseObject",
  type: {
    name: "Composite",
    className: "HBaseObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HiveObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "HiveObject",
  type: {
    name: "Composite",
    className: "HiveObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HubspotObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "HubspotObject",
  type: {
    name: "Composite",
    className: "HubspotObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ImpalaObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "ImpalaObject",
  type: {
    name: "Composite",
    className: "ImpalaObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const JiraObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "JiraObject",
  type: {
    name: "Composite",
    className: "JiraObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MagentoObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "MagentoObject",
  type: {
    name: "Composite",
    className: "MagentoObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MariaDBTableDataset: coreHttp.CompositeMapper = {
  serializedName: "MariaDBTable",
  type: {
    name: "Composite",
    className: "MariaDBTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureMariaDBTableDataset: coreHttp.CompositeMapper = {
  serializedName: "AzureMariaDBTable",
  type: {
    name: "Composite",
    className: "AzureMariaDBTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MarketoObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "MarketoObject",
  type: {
    name: "Composite",
    className: "MarketoObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PaypalObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "PaypalObject",
  type: {
    name: "Composite",
    className: "PaypalObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PhoenixObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "PhoenixObject",
  type: {
    name: "Composite",
    className: "PhoenixObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PrestoObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "PrestoObject",
  type: {
    name: "Composite",
    className: "PrestoObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const QuickBooksObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "QuickBooksObject",
  type: {
    name: "Composite",
    className: "QuickBooksObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ServiceNowObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "ServiceNowObject",
  type: {
    name: "Composite",
    className: "ServiceNowObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ShopifyObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "ShopifyObject",
  type: {
    name: "Composite",
    className: "ShopifyObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SparkObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "SparkObject",
  type: {
    name: "Composite",
    className: "SparkObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SquareObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "SquareObject",
  type: {
    name: "Composite",
    className: "SquareObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const XeroObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "XeroObject",
  type: {
    name: "Composite",
    className: "XeroObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ZohoObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "ZohoObject",
  type: {
    name: "Composite",
    className: "ZohoObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const NetezzaTableDataset: coreHttp.CompositeMapper = {
  serializedName: "NetezzaTable",
  type: {
    name: "Composite",
    className: "NetezzaTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const VerticaTableDataset: coreHttp.CompositeMapper = {
  serializedName: "VerticaTable",
  type: {
    name: "Composite",
    className: "VerticaTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      },
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      },
      schemaTypePropertiesSchema: {
        serializedName: "typeProperties.schema",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceMarketingCloudObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "SalesforceMarketingCloudObject",
  type: {
    name: "Composite",
    className: "SalesforceMarketingCloudObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ResponsysObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "ResponsysObject",
  type: {
    name: "Composite",
    className: "ResponsysObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsAXResourceDataset: coreHttp.CompositeMapper = {
  serializedName: "DynamicsAXResource",
  type: {
    name: "Composite",
    className: "DynamicsAXResourceDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      path: {
        serializedName: "typeProperties.path",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const OracleServiceCloudObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "OracleServiceCloudObject",
  type: {
    name: "Composite",
    className: "OracleServiceCloudObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDataExplorerTableDataset: coreHttp.CompositeMapper = {
  serializedName: "AzureDataExplorerTable",
  type: {
    name: "Composite",
    className: "AzureDataExplorerTableDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      table: {
        serializedName: "typeProperties.table",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GoogleAdWordsObjectDataset: coreHttp.CompositeMapper = {
  serializedName: "GoogleAdWordsObject",
  type: {
    name: "Composite",
    className: "GoogleAdWordsObjectDataset",
    uberParent: "Dataset",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Dataset.type.polymorphicDiscriminator,
    modelProperties: {
      ...Dataset.type.modelProperties,
      tableName: {
        serializedName: "typeProperties.tableName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ControlActivity: coreHttp.CompositeMapper = {
  serializedName: "Container",
  type: {
    name: "Composite",
    className: "ControlActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...Activity.type.modelProperties
    }
  }
};

export const ExecutionActivity: coreHttp.CompositeMapper = {
  serializedName: "Execution",
  type: {
    name: "Composite",
    className: "ExecutionActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...Activity.type.modelProperties,
      linkedServiceName: {
        serializedName: "linkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      policy: {
        serializedName: "policy",
        type: {
          name: "Composite",
          className: "ActivityPolicy"
        }
      }
    }
  }
};

export const SqlPoolStoredProcedureActivity: coreHttp.CompositeMapper = {
  serializedName: "SqlPoolStoredProcedure",
  type: {
    name: "Composite",
    className: "SqlPoolStoredProcedureActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...Activity.type.modelProperties,
      sqlPool: {
        serializedName: "sqlPool",
        type: {
          name: "Composite",
          className: "SqlPoolReference"
        }
      },
      storedProcedureName: {
        serializedName: "typeProperties.storedProcedureName",
        required: true,
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "typeProperties.storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      }
    }
  }
};

export const RerunTumblingWindowTrigger: coreHttp.CompositeMapper = {
  serializedName: "RerunTumblingWindowTrigger",
  type: {
    name: "Composite",
    className: "RerunTumblingWindowTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...Trigger.type.modelProperties,
      parentTrigger: {
        serializedName: "typeProperties.parentTrigger",
        type: {
          name: "any"
        }
      },
      requestedStartTime: {
        serializedName: "typeProperties.requestedStartTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      requestedEndTime: {
        serializedName: "typeProperties.requestedEndTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      maxConcurrency: {
        constraints: {
          InclusiveMaximum: 50,
          InclusiveMinimum: 1
        },
        serializedName: "typeProperties.maxConcurrency",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MultiplePipelineTrigger: coreHttp.CompositeMapper = {
  serializedName: "MultiplePipelineTrigger",
  type: {
    name: "Composite",
    className: "MultiplePipelineTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...Trigger.type.modelProperties,
      pipelines: {
        serializedName: "pipelines",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TriggerPipelineReference"
            }
          }
        }
      }
    }
  }
};

export const TumblingWindowTrigger: coreHttp.CompositeMapper = {
  serializedName: "TumblingWindowTrigger",
  type: {
    name: "Composite",
    className: "TumblingWindowTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...Trigger.type.modelProperties,
      pipeline: {
        serializedName: "pipeline",
        type: {
          name: "Composite",
          className: "TriggerPipelineReference"
        }
      },
      frequency: {
        serializedName: "typeProperties.frequency",
        required: true,
        type: {
          name: "String"
        }
      },
      interval: {
        serializedName: "typeProperties.interval",
        required: true,
        type: {
          name: "Number"
        }
      },
      startTime: {
        serializedName: "typeProperties.startTime",
        required: true,
        type: {
          name: "DateTime"
        }
      },
      endTime: {
        serializedName: "typeProperties.endTime",
        type: {
          name: "DateTime"
        }
      },
      delay: {
        serializedName: "typeProperties.delay",
        type: {
          name: "any"
        }
      },
      maxConcurrency: {
        constraints: {
          InclusiveMaximum: 50,
          InclusiveMinimum: 1
        },
        serializedName: "typeProperties.maxConcurrency",
        required: true,
        type: {
          name: "Number"
        }
      },
      retryPolicy: {
        serializedName: "typeProperties.retryPolicy",
        type: {
          name: "Composite",
          className: "RetryPolicy"
        }
      },
      dependsOn: {
        serializedName: "typeProperties.dependsOn",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DependencyReference"
            }
          }
        }
      }
    }
  }
};

export const ChainingTrigger: coreHttp.CompositeMapper = {
  serializedName: "ChainingTrigger",
  type: {
    name: "Composite",
    className: "ChainingTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...Trigger.type.modelProperties,
      pipeline: {
        serializedName: "pipeline",
        type: {
          name: "Composite",
          className: "TriggerPipelineReference"
        }
      },
      dependsOn: {
        serializedName: "typeProperties.dependsOn",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PipelineReference"
            }
          }
        }
      },
      runDimension: {
        serializedName: "typeProperties.runDimension",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MappingDataFlow: coreHttp.CompositeMapper = {
  serializedName: "MappingDataFlow",
  type: {
    name: "Composite",
    className: "MappingDataFlow",
    uberParent: "DataFlow",
    polymorphicDiscriminator: DataFlow.type.polymorphicDiscriminator,
    modelProperties: {
      ...DataFlow.type.modelProperties,
      sources: {
        serializedName: "typeProperties.sources",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowSource"
            }
          }
        }
      },
      sinks: {
        serializedName: "typeProperties.sinks",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataFlowSink"
            }
          }
        }
      },
      transformations: {
        serializedName: "typeProperties.transformations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Transformation"
            }
          }
        }
      },
      script: {
        serializedName: "typeProperties.script",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugResource",
    modelProperties: {
      ...SubResourceDebugResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DataFlow"
        }
      }
    }
  }
};

export const DatasetDebugResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetDebugResource",
    modelProperties: {
      ...SubResourceDebugResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Dataset"
        }
      }
    }
  }
};

export const LinkedServiceDebugResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedServiceDebugResource",
    modelProperties: {
      ...SubResourceDebugResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LinkedService"
        }
      }
    }
  }
};

export const ManagedIntegrationRuntime: coreHttp.CompositeMapper = {
  serializedName: "Managed",
  type: {
    name: "Composite",
    className: "ManagedIntegrationRuntime",
    uberParent: "IntegrationRuntime",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: IntegrationRuntime.type.polymorphicDiscriminator,
    modelProperties: {
      ...IntegrationRuntime.type.modelProperties,
      state: {
        serializedName: "state",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      computeProperties: {
        serializedName: "typeProperties.computeProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeComputeProperties"
        }
      },
      ssisProperties: {
        serializedName: "typeProperties.ssisProperties",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeSsisProperties"
        }
      }
    }
  }
};

export const SelfHostedIntegrationRuntime: coreHttp.CompositeMapper = {
  serializedName: "SelfHosted",
  type: {
    name: "Composite",
    className: "SelfHostedIntegrationRuntime",
    uberParent: "IntegrationRuntime",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: IntegrationRuntime.type.polymorphicDiscriminator,
    modelProperties: {
      ...IntegrationRuntime.type.modelProperties,
      linkedInfo: {
        serializedName: "typeProperties.linkedInfo",
        type: {
          name: "Composite",
          className: "LinkedIntegrationRuntimeType"
        }
      }
    }
  }
};

export const SecureString: coreHttp.CompositeMapper = {
  serializedName: "SecureString",
  type: {
    name: "Composite",
    className: "SecureString",
    uberParent: "SecretBase",
    polymorphicDiscriminator: SecretBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...SecretBase.type.modelProperties,
      value: {
        serializedName: "value",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureKeyVaultSecretReference: coreHttp.CompositeMapper = {
  serializedName: "AzureKeyVaultSecret",
  type: {
    name: "Composite",
    className: "AzureKeyVaultSecretReference",
    uberParent: "SecretBase",
    polymorphicDiscriminator: SecretBase.type.polymorphicDiscriminator,
    modelProperties: {
      ...SecretBase.type.modelProperties,
      store: {
        serializedName: "store",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      secretName: {
        serializedName: "secretName",
        required: true,
        type: {
          name: "any"
        }
      },
      secretVersion: {
        serializedName: "secretVersion",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DataFlowSource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowSource",
    modelProperties: {
      ...Transformation.type.modelProperties,
      dataset: {
        serializedName: "dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      }
    }
  }
};

export const DataFlowSink: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowSink",
    modelProperties: {
      ...Transformation.type.modelProperties,
      dataset: {
        serializedName: "dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      }
    }
  }
};

export const AzureBlobStorageLocation: coreHttp.CompositeMapper = {
  serializedName: "AzureBlobStorageLocation",
  type: {
    name: "Composite",
    className: "AzureBlobStorageLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      container: {
        serializedName: "container",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureBlobFSLocation: coreHttp.CompositeMapper = {
  serializedName: "AzureBlobFSLocation",
  type: {
    name: "Composite",
    className: "AzureBlobFSLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      fileSystem: {
        serializedName: "fileSystem",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDataLakeStoreLocation: coreHttp.CompositeMapper = {
  serializedName: "AzureDataLakeStoreLocation",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const AmazonS3Location: coreHttp.CompositeMapper = {
  serializedName: "AmazonS3Location",
  type: {
    name: "Composite",
    className: "AmazonS3Location",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      bucketName: {
        serializedName: "bucketName",
        type: {
          name: "any"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const FileServerLocation: coreHttp.CompositeMapper = {
  serializedName: "FileServerLocation",
  type: {
    name: "Composite",
    className: "FileServerLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const AzureFileStorageLocation: coreHttp.CompositeMapper = {
  serializedName: "AzureFileStorageLocation",
  type: {
    name: "Composite",
    className: "AzureFileStorageLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const GoogleCloudStorageLocation: coreHttp.CompositeMapper = {
  serializedName: "GoogleCloudStorageLocation",
  type: {
    name: "Composite",
    className: "GoogleCloudStorageLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      bucketName: {
        serializedName: "bucketName",
        type: {
          name: "any"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const FtpServerLocation: coreHttp.CompositeMapper = {
  serializedName: "FtpServerLocation",
  type: {
    name: "Composite",
    className: "FtpServerLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const SftpLocation: coreHttp.CompositeMapper = {
  serializedName: "SftpLocation",
  type: {
    name: "Composite",
    className: "SftpLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const HttpServerLocation: coreHttp.CompositeMapper = {
  serializedName: "HttpServerLocation",
  type: {
    name: "Composite",
    className: "HttpServerLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties,
      relativeUrl: {
        serializedName: "relativeUrl",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HdfsLocation: coreHttp.CompositeMapper = {
  serializedName: "HdfsLocation",
  type: {
    name: "Composite",
    className: "HdfsLocation",
    uberParent: "DatasetLocation",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetLocation.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetLocation.type.modelProperties
    }
  }
};

export const TextFormat: coreHttp.CompositeMapper = {
  serializedName: "TextFormat",
  type: {
    name: "Composite",
    className: "TextFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetStorageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetStorageFormat.type.modelProperties,
      columnDelimiter: {
        serializedName: "columnDelimiter",
        type: {
          name: "any"
        }
      },
      rowDelimiter: {
        serializedName: "rowDelimiter",
        type: {
          name: "any"
        }
      },
      escapeChar: {
        serializedName: "escapeChar",
        type: {
          name: "any"
        }
      },
      quoteChar: {
        serializedName: "quoteChar",
        type: {
          name: "any"
        }
      },
      nullValue: {
        serializedName: "nullValue",
        type: {
          name: "any"
        }
      },
      encodingName: {
        serializedName: "encodingName",
        type: {
          name: "any"
        }
      },
      treatEmptyAsNull: {
        serializedName: "treatEmptyAsNull",
        type: {
          name: "any"
        }
      },
      skipLineCount: {
        serializedName: "skipLineCount",
        type: {
          name: "any"
        }
      },
      firstRowAsHeader: {
        serializedName: "firstRowAsHeader",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const JsonFormat: coreHttp.CompositeMapper = {
  serializedName: "JsonFormat",
  type: {
    name: "Composite",
    className: "JsonFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetStorageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetStorageFormat.type.modelProperties,
      filePattern: {
        serializedName: "filePattern",
        type: {
          name: "String"
        }
      },
      nestingSeparator: {
        serializedName: "nestingSeparator",
        type: {
          name: "any"
        }
      },
      encodingName: {
        serializedName: "encodingName",
        type: {
          name: "any"
        }
      },
      jsonNodeReference: {
        serializedName: "jsonNodeReference",
        type: {
          name: "any"
        }
      },
      jsonPathDefinition: {
        serializedName: "jsonPathDefinition",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AvroFormat: coreHttp.CompositeMapper = {
  serializedName: "AvroFormat",
  type: {
    name: "Composite",
    className: "AvroFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetStorageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetStorageFormat.type.modelProperties
    }
  }
};

export const OrcFormat: coreHttp.CompositeMapper = {
  serializedName: "OrcFormat",
  type: {
    name: "Composite",
    className: "OrcFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetStorageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetStorageFormat.type.modelProperties
    }
  }
};

export const ParquetFormat: coreHttp.CompositeMapper = {
  serializedName: "ParquetFormat",
  type: {
    name: "Composite",
    className: "ParquetFormat",
    uberParent: "DatasetStorageFormat",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetStorageFormat.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetStorageFormat.type.modelProperties
    }
  }
};

export const DatasetBZip2Compression: coreHttp.CompositeMapper = {
  serializedName: "BZip2",
  type: {
    name: "Composite",
    className: "DatasetBZip2Compression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetCompression.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetCompression.type.modelProperties
    }
  }
};

export const DatasetGZipCompression: coreHttp.CompositeMapper = {
  serializedName: "GZip",
  type: {
    name: "Composite",
    className: "DatasetGZipCompression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetCompression.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetCompression.type.modelProperties,
      level: {
        serializedName: "level",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DatasetDeflateCompression: coreHttp.CompositeMapper = {
  serializedName: "Deflate",
  type: {
    name: "Composite",
    className: "DatasetDeflateCompression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetCompression.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetCompression.type.modelProperties,
      level: {
        serializedName: "level",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DatasetZipDeflateCompression: coreHttp.CompositeMapper = {
  serializedName: "ZipDeflate",
  type: {
    name: "Composite",
    className: "DatasetZipDeflateCompression",
    uberParent: "DatasetCompression",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: DatasetCompression.type.polymorphicDiscriminator,
    modelProperties: {
      ...DatasetCompression.type.modelProperties,
      level: {
        serializedName: "level",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const WebAnonymousAuthentication: coreHttp.CompositeMapper = {
  serializedName: "Anonymous",
  type: {
    name: "Composite",
    className: "WebAnonymousAuthentication",
    uberParent: "WebLinkedServiceTypeProperties",
    polymorphicDiscriminator: WebLinkedServiceTypeProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...WebLinkedServiceTypeProperties.type.modelProperties
    }
  }
};

export const WebBasicAuthentication: coreHttp.CompositeMapper = {
  serializedName: "Basic",
  type: {
    name: "Composite",
    className: "WebBasicAuthentication",
    uberParent: "WebLinkedServiceTypeProperties",
    polymorphicDiscriminator: WebLinkedServiceTypeProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...WebLinkedServiceTypeProperties.type.modelProperties,
      username: {
        serializedName: "username",
        required: true,
        type: {
          name: "any"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      }
    }
  }
};

export const WebClientCertificateAuthentication: coreHttp.CompositeMapper = {
  serializedName: "ClientCertificate",
  type: {
    name: "Composite",
    className: "WebClientCertificateAuthentication",
    uberParent: "WebLinkedServiceTypeProperties",
    polymorphicDiscriminator: WebLinkedServiceTypeProperties.type.polymorphicDiscriminator,
    modelProperties: {
      ...WebLinkedServiceTypeProperties.type.modelProperties,
      pfx: {
        serializedName: "pfx",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      },
      password: {
        serializedName: "password",
        type: {
          name: "Composite",
          className: "SecretBase"
        }
      }
    }
  }
};

export const AzureBlobStorageReadSettings: coreHttp.CompositeMapper = {
  serializedName: "AzureBlobStorageReadSettings",
  type: {
    name: "Composite",
    className: "AzureBlobStorageReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "any"
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "any"
        }
      },
      prefix: {
        serializedName: "prefix",
        type: {
          name: "any"
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "any"
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureBlobFSReadSettings: coreHttp.CompositeMapper = {
  serializedName: "AzureBlobFSReadSettings",
  type: {
    name: "Composite",
    className: "AzureBlobFSReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "any"
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "any"
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "any"
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDataLakeStoreReadSettings: coreHttp.CompositeMapper = {
  serializedName: "AzureDataLakeStoreReadSettings",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "any"
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "any"
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "any"
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AmazonS3ReadSettings: coreHttp.CompositeMapper = {
  serializedName: "AmazonS3ReadSettings",
  type: {
    name: "Composite",
    className: "AmazonS3ReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "any"
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "any"
        }
      },
      prefix: {
        serializedName: "prefix",
        type: {
          name: "any"
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "any"
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const FileServerReadSettings: coreHttp.CompositeMapper = {
  serializedName: "FileServerReadSettings",
  type: {
    name: "Composite",
    className: "FileServerReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "any"
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "any"
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "any"
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureFileStorageReadSettings: coreHttp.CompositeMapper = {
  serializedName: "AzureFileStorageReadSettings",
  type: {
    name: "Composite",
    className: "AzureFileStorageReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "any"
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "any"
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "any"
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GoogleCloudStorageReadSettings: coreHttp.CompositeMapper = {
  serializedName: "GoogleCloudStorageReadSettings",
  type: {
    name: "Composite",
    className: "GoogleCloudStorageReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "any"
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "any"
        }
      },
      prefix: {
        serializedName: "prefix",
        type: {
          name: "any"
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "any"
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const FtpReadSettings: coreHttp.CompositeMapper = {
  serializedName: "FtpReadSettings",
  type: {
    name: "Composite",
    className: "FtpReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "any"
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "any"
        }
      },
      useBinaryTransfer: {
        serializedName: "useBinaryTransfer",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SftpReadSettings: coreHttp.CompositeMapper = {
  serializedName: "SftpReadSettings",
  type: {
    name: "Composite",
    className: "SftpReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "any"
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "any"
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "any"
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HttpReadSettings: coreHttp.CompositeMapper = {
  serializedName: "HttpReadSettings",
  type: {
    name: "Composite",
    className: "HttpReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      requestMethod: {
        serializedName: "requestMethod",
        type: {
          name: "any"
        }
      },
      requestBody: {
        serializedName: "requestBody",
        type: {
          name: "any"
        }
      },
      additionalHeaders: {
        serializedName: "additionalHeaders",
        type: {
          name: "any"
        }
      },
      requestTimeout: {
        serializedName: "requestTimeout",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HdfsReadSettings: coreHttp.CompositeMapper = {
  serializedName: "HdfsReadSettings",
  type: {
    name: "Composite",
    className: "HdfsReadSettings",
    uberParent: "StoreReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreReadSettings.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      wildcardFolderPath: {
        serializedName: "wildcardFolderPath",
        type: {
          name: "any"
        }
      },
      wildcardFileName: {
        serializedName: "wildcardFileName",
        type: {
          name: "any"
        }
      },
      enablePartitionDiscovery: {
        serializedName: "enablePartitionDiscovery",
        type: {
          name: "Boolean"
        }
      },
      modifiedDatetimeStart: {
        serializedName: "modifiedDatetimeStart",
        type: {
          name: "any"
        }
      },
      modifiedDatetimeEnd: {
        serializedName: "modifiedDatetimeEnd",
        type: {
          name: "any"
        }
      },
      distcpSettings: {
        serializedName: "distcpSettings",
        type: {
          name: "Composite",
          className: "DistcpSettings"
        }
      }
    }
  }
};

export const SftpWriteSettings: coreHttp.CompositeMapper = {
  serializedName: "SftpWriteSettings",
  type: {
    name: "Composite",
    className: "SftpWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties,
      operationTimeout: {
        serializedName: "operationTimeout",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureBlobStorageWriteSettings: coreHttp.CompositeMapper = {
  serializedName: "AzureBlobStorageWriteSettings",
  type: {
    name: "Composite",
    className: "AzureBlobStorageWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties,
      blockSizeInMB: {
        serializedName: "blockSizeInMB",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureBlobFSWriteSettings: coreHttp.CompositeMapper = {
  serializedName: "AzureBlobFSWriteSettings",
  type: {
    name: "Composite",
    className: "AzureBlobFSWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties,
      blockSizeInMB: {
        serializedName: "blockSizeInMB",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDataLakeStoreWriteSettings: coreHttp.CompositeMapper = {
  serializedName: "AzureDataLakeStoreWriteSettings",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties
    }
  }
};

export const FileServerWriteSettings: coreHttp.CompositeMapper = {
  serializedName: "FileServerWriteSettings",
  type: {
    name: "Composite",
    className: "FileServerWriteSettings",
    uberParent: "StoreWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: StoreWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...StoreWriteSettings.type.modelProperties
    }
  }
};

export const DelimitedTextReadSettings: coreHttp.CompositeMapper = {
  serializedName: "DelimitedTextReadSettings",
  type: {
    name: "Composite",
    className: "DelimitedTextReadSettings",
    uberParent: "FormatReadSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatReadSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatReadSettings.type.modelProperties,
      skipLineCount: {
        serializedName: "skipLineCount",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AvroWriteSettings: coreHttp.CompositeMapper = {
  serializedName: "AvroWriteSettings",
  type: {
    name: "Composite",
    className: "AvroWriteSettings",
    uberParent: "FormatWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatWriteSettings.type.modelProperties,
      recordName: {
        serializedName: "recordName",
        type: {
          name: "String"
        }
      },
      recordNamespace: {
        serializedName: "recordNamespace",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DelimitedTextWriteSettings: coreHttp.CompositeMapper = {
  serializedName: "DelimitedTextWriteSettings",
  type: {
    name: "Composite",
    className: "DelimitedTextWriteSettings",
    uberParent: "FormatWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatWriteSettings.type.modelProperties,
      quoteAllText: {
        serializedName: "quoteAllText",
        type: {
          name: "any"
        }
      },
      fileExtension: {
        serializedName: "fileExtension",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const JsonWriteSettings: coreHttp.CompositeMapper = {
  serializedName: "JsonWriteSettings",
  type: {
    name: "Composite",
    className: "JsonWriteSettings",
    uberParent: "FormatWriteSettings",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: FormatWriteSettings.type.polymorphicDiscriminator,
    modelProperties: {
      ...FormatWriteSettings.type.modelProperties,
      filePattern: {
        serializedName: "filePattern",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AvroSource: coreHttp.CompositeMapper = {
  serializedName: "AvroSource",
  type: {
    name: "Composite",
    className: "AvroSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      }
    }
  }
};

export const ParquetSource: coreHttp.CompositeMapper = {
  serializedName: "ParquetSource",
  type: {
    name: "Composite",
    className: "ParquetSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      }
    }
  }
};

export const DelimitedTextSource: coreHttp.CompositeMapper = {
  serializedName: "DelimitedTextSource",
  type: {
    name: "Composite",
    className: "DelimitedTextSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "DelimitedTextReadSettings"
        }
      }
    }
  }
};

export const JsonSource: coreHttp.CompositeMapper = {
  serializedName: "JsonSource",
  type: {
    name: "Composite",
    className: "JsonSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      }
    }
  }
};

export const OrcSource: coreHttp.CompositeMapper = {
  serializedName: "OrcSource",
  type: {
    name: "Composite",
    className: "OrcSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      }
    }
  }
};

export const BinarySource: coreHttp.CompositeMapper = {
  serializedName: "BinarySource",
  type: {
    name: "Composite",
    className: "BinarySource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreReadSettings"
        }
      }
    }
  }
};

export const TabularSource: coreHttp.CompositeMapper = {
  serializedName: "TabularSource",
  type: {
    name: "Composite",
    className: "TabularSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...CopySource.type.modelProperties,
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const BlobSource: coreHttp.CompositeMapper = {
  serializedName: "BlobSource",
  type: {
    name: "Composite",
    className: "BlobSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      treatEmptyAsNull: {
        serializedName: "treatEmptyAsNull",
        type: {
          name: "any"
        }
      },
      skipHeaderLineCount: {
        serializedName: "skipHeaderLineCount",
        type: {
          name: "any"
        }
      },
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DocumentDbCollectionSource: coreHttp.CompositeMapper = {
  serializedName: "DocumentDbCollectionSource",
  type: {
    name: "Composite",
    className: "DocumentDbCollectionSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      },
      nestingSeparator: {
        serializedName: "nestingSeparator",
        type: {
          name: "any"
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CosmosDbSqlApiSource: coreHttp.CompositeMapper = {
  serializedName: "CosmosDbSqlApiSource",
  type: {
    name: "Composite",
    className: "CosmosDbSqlApiSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      },
      pageSize: {
        serializedName: "pageSize",
        type: {
          name: "any"
        }
      },
      preferredRegions: {
        serializedName: "preferredRegions",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsSource: coreHttp.CompositeMapper = {
  serializedName: "DynamicsSource",
  type: {
    name: "Composite",
    className: "DynamicsSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsCrmSource: coreHttp.CompositeMapper = {
  serializedName: "DynamicsCrmSource",
  type: {
    name: "Composite",
    className: "DynamicsCrmSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CommonDataServiceForAppsSource: coreHttp.CompositeMapper = {
  serializedName: "CommonDataServiceForAppsSource",
  type: {
    name: "Composite",
    className: "CommonDataServiceForAppsSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const RelationalSource: coreHttp.CompositeMapper = {
  serializedName: "RelationalSource",
  type: {
    name: "Composite",
    className: "RelationalSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MicrosoftAccessSource: coreHttp.CompositeMapper = {
  serializedName: "MicrosoftAccessSource",
  type: {
    name: "Composite",
    className: "MicrosoftAccessSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ODataSource: coreHttp.CompositeMapper = {
  serializedName: "ODataSource",
  type: {
    name: "Composite",
    className: "ODataSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceServiceCloudSource: coreHttp.CompositeMapper = {
  serializedName: "SalesforceServiceCloudSource",
  type: {
    name: "Composite",
    className: "SalesforceServiceCloudSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      },
      readBehavior: {
        serializedName: "readBehavior",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RestSource: coreHttp.CompositeMapper = {
  serializedName: "RestSource",
  type: {
    name: "Composite",
    className: "RestSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      requestMethod: {
        serializedName: "requestMethod",
        type: {
          name: "any"
        }
      },
      requestBody: {
        serializedName: "requestBody",
        type: {
          name: "any"
        }
      },
      additionalHeaders: {
        serializedName: "additionalHeaders",
        type: {
          name: "any"
        }
      },
      paginationRules: {
        serializedName: "paginationRules",
        type: {
          name: "any"
        }
      },
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "any"
        }
      },
      requestInterval: {
        serializedName: "requestInterval",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const FileSystemSource: coreHttp.CompositeMapper = {
  serializedName: "FileSystemSource",
  type: {
    name: "Composite",
    className: "FileSystemSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HdfsSource: coreHttp.CompositeMapper = {
  serializedName: "HdfsSource",
  type: {
    name: "Composite",
    className: "HdfsSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      },
      distcpSettings: {
        serializedName: "distcpSettings",
        type: {
          name: "Composite",
          className: "DistcpSettings"
        }
      }
    }
  }
};

export const AzureDataExplorerSource: coreHttp.CompositeMapper = {
  serializedName: "AzureDataExplorerSource",
  type: {
    name: "Composite",
    className: "AzureDataExplorerSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        required: true,
        type: {
          name: "any"
        }
      },
      noTruncation: {
        serializedName: "noTruncation",
        type: {
          name: "any"
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const OracleSource: coreHttp.CompositeMapper = {
  serializedName: "OracleSource",
  type: {
    name: "Composite",
    className: "OracleSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      oracleReaderQuery: {
        serializedName: "oracleReaderQuery",
        type: {
          name: "any"
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "any"
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "String"
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "OraclePartitionSettings"
        }
      }
    }
  }
};

export const WebSource: coreHttp.CompositeMapper = {
  serializedName: "WebSource",
  type: {
    name: "Composite",
    className: "WebSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties
    }
  }
};

export const MongoDbSource: coreHttp.CompositeMapper = {
  serializedName: "MongoDbSource",
  type: {
    name: "Composite",
    className: "MongoDbSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MongoDbV2Source: coreHttp.CompositeMapper = {
  serializedName: "MongoDbV2Source",
  type: {
    name: "Composite",
    className: "MongoDbV2Source",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      filter: {
        serializedName: "filter",
        type: {
          name: "any"
        }
      },
      cursorMethods: {
        serializedName: "cursorMethods",
        type: {
          name: "Composite",
          className: "MongoDbCursorMethodsProperties"
        }
      },
      batchSize: {
        serializedName: "batchSize",
        type: {
          name: "any"
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CosmosDbMongoDbApiSource: coreHttp.CompositeMapper = {
  serializedName: "CosmosDbMongoDbApiSource",
  type: {
    name: "Composite",
    className: "CosmosDbMongoDbApiSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      filter: {
        serializedName: "filter",
        type: {
          name: "any"
        }
      },
      cursorMethods: {
        serializedName: "cursorMethods",
        type: {
          name: "Composite",
          className: "MongoDbCursorMethodsProperties"
        }
      },
      batchSize: {
        serializedName: "batchSize",
        type: {
          name: "any"
        }
      },
      queryTimeout: {
        serializedName: "queryTimeout",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const Office365Source: coreHttp.CompositeMapper = {
  serializedName: "Office365Source",
  type: {
    name: "Composite",
    className: "Office365Source",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      allowedGroups: {
        serializedName: "allowedGroups",
        type: {
          name: "any"
        }
      },
      userScopeFilterUri: {
        serializedName: "userScopeFilterUri",
        type: {
          name: "any"
        }
      },
      dateFilterColumn: {
        serializedName: "dateFilterColumn",
        type: {
          name: "any"
        }
      },
      startTime: {
        serializedName: "startTime",
        type: {
          name: "any"
        }
      },
      endTime: {
        serializedName: "endTime",
        type: {
          name: "any"
        }
      },
      outputColumns: {
        serializedName: "outputColumns",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDataLakeStoreSource: coreHttp.CompositeMapper = {
  serializedName: "AzureDataLakeStoreSource",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureBlobFSSource: coreHttp.CompositeMapper = {
  serializedName: "AzureBlobFSSource",
  type: {
    name: "Composite",
    className: "AzureBlobFSSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      treatEmptyAsNull: {
        serializedName: "treatEmptyAsNull",
        type: {
          name: "any"
        }
      },
      skipHeaderLineCount: {
        serializedName: "skipHeaderLineCount",
        type: {
          name: "any"
        }
      },
      recursive: {
        serializedName: "recursive",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HttpSource: coreHttp.CompositeMapper = {
  serializedName: "HttpSource",
  type: {
    name: "Composite",
    className: "HttpSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySource.type.modelProperties,
      httpRequestTimeout: {
        serializedName: "httpRequestTimeout",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DelimitedTextSink: coreHttp.CompositeMapper = {
  serializedName: "DelimitedTextSink",
  type: {
    name: "Composite",
    className: "DelimitedTextSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "DelimitedTextWriteSettings"
        }
      }
    }
  }
};

export const JsonSink: coreHttp.CompositeMapper = {
  serializedName: "JsonSink",
  type: {
    name: "Composite",
    className: "JsonSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "JsonWriteSettings"
        }
      }
    }
  }
};

export const OrcSink: coreHttp.CompositeMapper = {
  serializedName: "OrcSink",
  type: {
    name: "Composite",
    className: "OrcSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      }
    }
  }
};

export const AzurePostgreSqlSink: coreHttp.CompositeMapper = {
  serializedName: "AzurePostgreSqlSink",
  type: {
    name: "Composite",
    className: "AzurePostgreSqlSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureMySqlSink: coreHttp.CompositeMapper = {
  serializedName: "AzureMySqlSink",
  type: {
    name: "Composite",
    className: "AzureMySqlSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapCloudForCustomerSink: coreHttp.CompositeMapper = {
  serializedName: "SapCloudForCustomerSink",
  type: {
    name: "Composite",
    className: "SapCloudForCustomerSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureQueueSink: coreHttp.CompositeMapper = {
  serializedName: "AzureQueueSink",
  type: {
    name: "Composite",
    className: "AzureQueueSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties
    }
  }
};

export const AzureTableSink: coreHttp.CompositeMapper = {
  serializedName: "AzureTableSink",
  type: {
    name: "Composite",
    className: "AzureTableSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      azureTableDefaultPartitionKeyValue: {
        serializedName: "azureTableDefaultPartitionKeyValue",
        type: {
          name: "any"
        }
      },
      azureTablePartitionKeyName: {
        serializedName: "azureTablePartitionKeyName",
        type: {
          name: "any"
        }
      },
      azureTableRowKeyName: {
        serializedName: "azureTableRowKeyName",
        type: {
          name: "any"
        }
      },
      azureTableInsertType: {
        serializedName: "azureTableInsertType",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AvroSink: coreHttp.CompositeMapper = {
  serializedName: "AvroSink",
  type: {
    name: "Composite",
    className: "AvroSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      },
      formatSettings: {
        serializedName: "formatSettings",
        type: {
          name: "Composite",
          className: "AvroWriteSettings"
        }
      }
    }
  }
};

export const ParquetSink: coreHttp.CompositeMapper = {
  serializedName: "ParquetSink",
  type: {
    name: "Composite",
    className: "ParquetSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      }
    }
  }
};

export const BinarySink: coreHttp.CompositeMapper = {
  serializedName: "BinarySink",
  type: {
    name: "Composite",
    className: "BinarySink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      storeSettings: {
        serializedName: "storeSettings",
        type: {
          name: "Composite",
          className: "StoreWriteSettings"
        }
      }
    }
  }
};

export const BlobSink: coreHttp.CompositeMapper = {
  serializedName: "BlobSink",
  type: {
    name: "Composite",
    className: "BlobSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      blobWriterOverwriteFiles: {
        serializedName: "blobWriterOverwriteFiles",
        type: {
          name: "any"
        }
      },
      blobWriterDateTimeFormat: {
        serializedName: "blobWriterDateTimeFormat",
        type: {
          name: "any"
        }
      },
      blobWriterAddHeader: {
        serializedName: "blobWriterAddHeader",
        type: {
          name: "any"
        }
      },
      copyBehavior: {
        serializedName: "copyBehavior",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const FileSystemSink: coreHttp.CompositeMapper = {
  serializedName: "FileSystemSink",
  type: {
    name: "Composite",
    className: "FileSystemSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      copyBehavior: {
        serializedName: "copyBehavior",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DocumentDbCollectionSink: coreHttp.CompositeMapper = {
  serializedName: "DocumentDbCollectionSink",
  type: {
    name: "Composite",
    className: "DocumentDbCollectionSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      nestingSeparator: {
        serializedName: "nestingSeparator",
        type: {
          name: "any"
        }
      },
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CosmosDbSqlApiSink: coreHttp.CompositeMapper = {
  serializedName: "CosmosDbSqlApiSink",
  type: {
    name: "Composite",
    className: "CosmosDbSqlApiSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SqlSink: coreHttp.CompositeMapper = {
  serializedName: "SqlSink",
  type: {
    name: "Composite",
    className: "SqlSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      sqlWriterStoredProcedureName: {
        serializedName: "sqlWriterStoredProcedureName",
        type: {
          name: "any"
        }
      },
      sqlWriterTableType: {
        serializedName: "sqlWriterTableType",
        type: {
          name: "any"
        }
      },
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      storedProcedureTableTypeParameterName: {
        serializedName: "storedProcedureTableTypeParameterName",
        type: {
          name: "any"
        }
      },
      tableOption: {
        serializedName: "tableOption",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SqlServerSink: coreHttp.CompositeMapper = {
  serializedName: "SqlServerSink",
  type: {
    name: "Composite",
    className: "SqlServerSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      sqlWriterStoredProcedureName: {
        serializedName: "sqlWriterStoredProcedureName",
        type: {
          name: "any"
        }
      },
      sqlWriterTableType: {
        serializedName: "sqlWriterTableType",
        type: {
          name: "any"
        }
      },
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      storedProcedureTableTypeParameterName: {
        serializedName: "storedProcedureTableTypeParameterName",
        type: {
          name: "any"
        }
      },
      tableOption: {
        serializedName: "tableOption",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureSqlSink: coreHttp.CompositeMapper = {
  serializedName: "AzureSqlSink",
  type: {
    name: "Composite",
    className: "AzureSqlSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      sqlWriterStoredProcedureName: {
        serializedName: "sqlWriterStoredProcedureName",
        type: {
          name: "any"
        }
      },
      sqlWriterTableType: {
        serializedName: "sqlWriterTableType",
        type: {
          name: "any"
        }
      },
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      storedProcedureTableTypeParameterName: {
        serializedName: "storedProcedureTableTypeParameterName",
        type: {
          name: "any"
        }
      },
      tableOption: {
        serializedName: "tableOption",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SqlMISink: coreHttp.CompositeMapper = {
  serializedName: "SqlMISink",
  type: {
    name: "Composite",
    className: "SqlMISink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      sqlWriterStoredProcedureName: {
        serializedName: "sqlWriterStoredProcedureName",
        type: {
          name: "any"
        }
      },
      sqlWriterTableType: {
        serializedName: "sqlWriterTableType",
        type: {
          name: "any"
        }
      },
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      storedProcedureTableTypeParameterName: {
        serializedName: "storedProcedureTableTypeParameterName",
        type: {
          name: "any"
        }
      },
      tableOption: {
        serializedName: "tableOption",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SqlDWSink: coreHttp.CompositeMapper = {
  serializedName: "SqlDWSink",
  type: {
    name: "Composite",
    className: "SqlDWSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      },
      allowPolyBase: {
        serializedName: "allowPolyBase",
        type: {
          name: "any"
        }
      },
      polyBaseSettings: {
        serializedName: "polyBaseSettings",
        type: {
          name: "Composite",
          className: "PolybaseSettings"
        }
      },
      allowCopyCommand: {
        serializedName: "allowCopyCommand",
        type: {
          name: "any"
        }
      },
      copyCommandSettings: {
        serializedName: "copyCommandSettings",
        type: {
          name: "Composite",
          className: "DWCopyCommandSettings"
        }
      },
      tableOption: {
        serializedName: "tableOption",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const OracleSink: coreHttp.CompositeMapper = {
  serializedName: "OracleSink",
  type: {
    name: "Composite",
    className: "OracleSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDataLakeStoreSink: coreHttp.CompositeMapper = {
  serializedName: "AzureDataLakeStoreSink",
  type: {
    name: "Composite",
    className: "AzureDataLakeStoreSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      copyBehavior: {
        serializedName: "copyBehavior",
        type: {
          name: "any"
        }
      },
      enableAdlsSingleFileParallel: {
        serializedName: "enableAdlsSingleFileParallel",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureBlobFSSink: coreHttp.CompositeMapper = {
  serializedName: "AzureBlobFSSink",
  type: {
    name: "Composite",
    className: "AzureBlobFSSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      copyBehavior: {
        serializedName: "copyBehavior",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureSearchIndexSink: coreHttp.CompositeMapper = {
  serializedName: "AzureSearchIndexSink",
  type: {
    name: "Composite",
    className: "AzureSearchIndexSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OdbcSink: coreHttp.CompositeMapper = {
  serializedName: "OdbcSink",
  type: {
    name: "Composite",
    className: "OdbcSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const InformixSink: coreHttp.CompositeMapper = {
  serializedName: "InformixSink",
  type: {
    name: "Composite",
    className: "InformixSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MicrosoftAccessSink: coreHttp.CompositeMapper = {
  serializedName: "MicrosoftAccessSink",
  type: {
    name: "Composite",
    className: "MicrosoftAccessSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      preCopyScript: {
        serializedName: "preCopyScript",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsSink: coreHttp.CompositeMapper = {
  serializedName: "DynamicsSink",
  type: {
    name: "Composite",
    className: "DynamicsSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        required: true,
        type: {
          name: "String"
        }
      },
      ignoreNullValues: {
        serializedName: "ignoreNullValues",
        type: {
          name: "any"
        }
      },
      alternateKeyName: {
        serializedName: "alternateKeyName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsCrmSink: coreHttp.CompositeMapper = {
  serializedName: "DynamicsCrmSink",
  type: {
    name: "Composite",
    className: "DynamicsCrmSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        required: true,
        type: {
          name: "String"
        }
      },
      ignoreNullValues: {
        serializedName: "ignoreNullValues",
        type: {
          name: "any"
        }
      },
      alternateKeyName: {
        serializedName: "alternateKeyName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CommonDataServiceForAppsSink: coreHttp.CompositeMapper = {
  serializedName: "CommonDataServiceForAppsSink",
  type: {
    name: "Composite",
    className: "CommonDataServiceForAppsSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        required: true,
        type: {
          name: "String"
        }
      },
      ignoreNullValues: {
        serializedName: "ignoreNullValues",
        type: {
          name: "any"
        }
      },
      alternateKeyName: {
        serializedName: "alternateKeyName",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureDataExplorerSink: coreHttp.CompositeMapper = {
  serializedName: "AzureDataExplorerSink",
  type: {
    name: "Composite",
    className: "AzureDataExplorerSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      ingestionMappingName: {
        serializedName: "ingestionMappingName",
        type: {
          name: "any"
        }
      },
      ingestionMappingAsJson: {
        serializedName: "ingestionMappingAsJson",
        type: {
          name: "any"
        }
      },
      flushImmediately: {
        serializedName: "flushImmediately",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceSink: coreHttp.CompositeMapper = {
  serializedName: "SalesforceSink",
  type: {
    name: "Composite",
    className: "SalesforceSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "String"
        }
      },
      externalIdFieldName: {
        serializedName: "externalIdFieldName",
        type: {
          name: "any"
        }
      },
      ignoreNullValues: {
        serializedName: "ignoreNullValues",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceServiceCloudSink: coreHttp.CompositeMapper = {
  serializedName: "SalesforceServiceCloudSink",
  type: {
    name: "Composite",
    className: "SalesforceServiceCloudSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "String"
        }
      },
      externalIdFieldName: {
        serializedName: "externalIdFieldName",
        type: {
          name: "any"
        }
      },
      ignoreNullValues: {
        serializedName: "ignoreNullValues",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CosmosDbMongoDbApiSink: coreHttp.CompositeMapper = {
  serializedName: "CosmosDbMongoDbApiSink",
  type: {
    name: "Composite",
    className: "CosmosDbMongoDbApiSink",
    uberParent: "CopySink",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySink.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopySink.type.modelProperties,
      writeBehavior: {
        serializedName: "writeBehavior",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const TabularTranslator: coreHttp.CompositeMapper = {
  serializedName: "TabularTranslator",
  type: {
    name: "Composite",
    className: "TabularTranslator",
    uberParent: "CopyTranslator",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopyTranslator.type.polymorphicDiscriminator,
    modelProperties: {
      ...CopyTranslator.type.modelProperties,
      columnMappings: {
        serializedName: "columnMappings",
        type: {
          name: "any"
        }
      },
      schemaMapping: {
        serializedName: "schemaMapping",
        type: {
          name: "any"
        }
      },
      collectionReference: {
        serializedName: "collectionReference",
        type: {
          name: "any"
        }
      },
      mapComplexValuesToString: {
        serializedName: "mapComplexValuesToString",
        type: {
          name: "any"
        }
      },
      mappings: {
        serializedName: "mappings",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const TriggerDependencyReference: coreHttp.CompositeMapper = {
  serializedName: "TriggerDependencyReference",
  type: {
    name: "Composite",
    className: "TriggerDependencyReference",
    uberParent: "DependencyReference",
    polymorphicDiscriminator: {
      serializedName: "type",
      clientName: "type"
    },
    modelProperties: {
      ...DependencyReference.type.modelProperties,
      referenceTrigger: {
        serializedName: "referenceTrigger",
        type: {
          name: "Composite",
          className: "TriggerReference"
        }
      }
    }
  }
};

export const SelfDependencyTumblingWindowTriggerReference: coreHttp.CompositeMapper = {
  serializedName: "SelfDependencyTumblingWindowTriggerReference",
  type: {
    name: "Composite",
    className: "SelfDependencyTumblingWindowTriggerReference",
    uberParent: "DependencyReference",
    polymorphicDiscriminator: DependencyReference.type.polymorphicDiscriminator,
    modelProperties: {
      ...DependencyReference.type.modelProperties,
      offset: {
        constraints: {
          Pattern: new RegExp("((d+).)?(dd):(60|([0-5][0-9])):(60|([0-5][0-9]))"),
          MaxLength: 15,
          MinLength: 8
        },
        serializedName: "offset",
        required: true,
        type: {
          name: "String"
        }
      },
      size: {
        constraints: {
          Pattern: new RegExp("((d+).)?(dd):(60|([0-5][0-9])):(60|([0-5][0-9]))"),
          MaxLength: 15,
          MinLength: 8
        },
        serializedName: "size",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedIntegrationRuntimeKeyAuthorization: coreHttp.CompositeMapper = {
  serializedName: "Key",
  type: {
    name: "Composite",
    className: "LinkedIntegrationRuntimeKeyAuthorization",
    uberParent: "LinkedIntegrationRuntimeType",
    polymorphicDiscriminator: LinkedIntegrationRuntimeType.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedIntegrationRuntimeType.type.modelProperties,
      key: {
        serializedName: "key",
        type: {
          name: "Composite",
          className: "SecureString"
        }
      }
    }
  }
};

export const LinkedIntegrationRuntimeRbacAuthorization: coreHttp.CompositeMapper = {
  serializedName: "RBAC",
  type: {
    name: "Composite",
    className: "LinkedIntegrationRuntimeRbacAuthorization",
    uberParent: "LinkedIntegrationRuntimeType",
    polymorphicDiscriminator: LinkedIntegrationRuntimeType.type.polymorphicDiscriminator,
    modelProperties: {
      ...LinkedIntegrationRuntimeType.type.modelProperties,
      resourceId: {
        serializedName: "resourceId",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SubResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SubResource",
    modelProperties: {
      ...AzureEntityResource.type.modelProperties
    }
  }
};

export const PrivateEndpointConnection: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PrivateEndpointConnection",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      privateEndpoint: {
        serializedName: "properties.privateEndpoint",
        type: {
          name: "Composite",
          className: "PrivateEndpoint"
        }
      },
      privateLinkServiceConnectionState: {
        serializedName: "properties.privateLinkServiceConnectionState",
        type: {
          name: "Composite",
          className: "PrivateLinkServiceConnectionState"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Workspace: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "Workspace",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "ManagedIdentity"
        }
      },
      defaultDataLakeStorage: {
        serializedName: "properties.defaultDataLakeStorage",
        type: {
          name: "Composite",
          className: "DataLakeStorageAccountDetails"
        }
      },
      sqlAdministratorLoginPassword: {
        serializedName: "properties.sqlAdministratorLoginPassword",
        type: {
          name: "String"
        }
      },
      managedResourceGroupName: {
        serializedName: "properties.managedResourceGroupName",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        readOnly: true,
        type: {
          name: "String"
        }
      },
      sqlAdministratorLogin: {
        serializedName: "properties.sqlAdministratorLogin",
        type: {
          name: "String"
        }
      },
      virtualNetworkProfile: {
        serializedName: "properties.virtualNetworkProfile",
        type: {
          name: "Composite",
          className: "VirtualNetworkProfile"
        }
      },
      connectivityEndpoints: {
        serializedName: "properties.connectivityEndpoints",
        type: {
          name: "Dictionary",
          value: { type: { name: "String" } }
        }
      },
      managedVirtualNetwork: {
        serializedName: "properties.managedVirtualNetwork",
        type: {
          name: "String"
        }
      },
      privateEndpointConnections: {
        serializedName: "properties.privateEndpointConnections",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "PrivateEndpointConnection"
            }
          }
        }
      },
      encryption: {
        serializedName: "properties.encryption",
        type: {
          name: "Composite",
          className: "EncryptionDetails"
        }
      },
      workspaceUID: {
        serializedName: "properties.workspaceUID",
        readOnly: true,
        type: {
          name: "Uuid"
        }
      },
      extraProperties: {
        serializedName: "properties.extraProperties",
        readOnly: true,
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      managedVirtualNetworkSettings: {
        serializedName: "properties.managedVirtualNetworkSettings",
        type: {
          name: "Composite",
          className: "ManagedVirtualNetworkSettings"
        }
      },
      workspaceRepositoryConfiguration: {
        serializedName: "properties.workspaceRepositoryConfiguration",
        type: {
          name: "Composite",
          className: "WorkspaceRepositoryConfiguration"
        }
      },
      purviewConfiguration: {
        serializedName: "properties.purviewConfiguration",
        type: {
          name: "Composite",
          className: "PurviewConfiguration"
        }
      },
      adlaResourceId: {
        serializedName: "properties.adlaResourceId",
        readOnly: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SqlPool: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SqlPool",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      maxSizeBytes: {
        serializedName: "properties.maxSizeBytes",
        type: {
          name: "Number"
        }
      },
      collation: {
        serializedName: "properties.collation",
        type: {
          name: "String"
        }
      },
      sourceDatabaseId: {
        serializedName: "properties.sourceDatabaseId",
        type: {
          name: "String"
        }
      },
      recoverableDatabaseId: {
        serializedName: "properties.recoverableDatabaseId",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      status: {
        serializedName: "properties.status",
        type: {
          name: "String"
        }
      },
      restorePointInTime: {
        serializedName: "properties.restorePointInTime",
        type: {
          name: "String"
        }
      },
      createMode: {
        serializedName: "properties.createMode",
        type: {
          name: "String"
        }
      },
      creationDate: {
        serializedName: "properties.creationDate",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const BigDataPoolResourceInfo: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "BigDataPoolResourceInfo",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      provisioningState: {
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      autoScale: {
        serializedName: "properties.autoScale",
        type: {
          name: "Composite",
          className: "AutoScaleProperties"
        }
      },
      creationDate: {
        serializedName: "properties.creationDate",
        type: {
          name: "DateTime"
        }
      },
      autoPause: {
        serializedName: "properties.autoPause",
        type: {
          name: "Composite",
          className: "AutoPauseProperties"
        }
      },
      isComputeIsolationEnabled: {
        serializedName: "properties.isComputeIsolationEnabled",
        type: {
          name: "Boolean"
        }
      },
      sessionLevelPackagesEnabled: {
        serializedName: "properties.sessionLevelPackagesEnabled",
        type: {
          name: "Boolean"
        }
      },
      cacheSize: {
        serializedName: "properties.cacheSize",
        type: {
          name: "Number"
        }
      },
      dynamicExecutorAllocation: {
        serializedName: "properties.dynamicExecutorAllocation",
        type: {
          name: "Composite",
          className: "DynamicExecutorAllocation"
        }
      },
      sparkEventsFolder: {
        serializedName: "properties.sparkEventsFolder",
        type: {
          name: "String"
        }
      },
      nodeCount: {
        serializedName: "properties.nodeCount",
        type: {
          name: "Number"
        }
      },
      libraryRequirements: {
        serializedName: "properties.libraryRequirements",
        type: {
          name: "Composite",
          className: "LibraryRequirements"
        }
      },
      sparkConfigProperties: {
        serializedName: "properties.sparkConfigProperties",
        type: {
          name: "Composite",
          className: "LibraryRequirements"
        }
      },
      sparkVersion: {
        serializedName: "properties.sparkVersion",
        type: {
          name: "String"
        }
      },
      defaultSparkLogFolder: {
        serializedName: "properties.defaultSparkLogFolder",
        type: {
          name: "String"
        }
      },
      nodeSize: {
        serializedName: "properties.nodeSize",
        type: {
          name: "String"
        }
      },
      nodeSizeFamily: {
        serializedName: "properties.nodeSizeFamily",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ExecutePipelineActivity: coreHttp.CompositeMapper = {
  serializedName: "ExecutePipeline",
  type: {
    name: "Composite",
    className: "ExecutePipelineActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      pipeline: {
        serializedName: "typeProperties.pipeline",
        type: {
          name: "Composite",
          className: "PipelineReference"
        }
      },
      parameters: {
        serializedName: "typeProperties.parameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      waitOnCompletion: {
        serializedName: "typeProperties.waitOnCompletion",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const IfConditionActivity: coreHttp.CompositeMapper = {
  serializedName: "IfCondition",
  type: {
    name: "Composite",
    className: "IfConditionActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      expression: {
        serializedName: "typeProperties.expression",
        type: {
          name: "Composite",
          className: "Expression"
        }
      },
      ifTrueActivities: {
        serializedName: "typeProperties.ifTrueActivities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      },
      ifFalseActivities: {
        serializedName: "typeProperties.ifFalseActivities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      }
    }
  }
};

export const SwitchActivity: coreHttp.CompositeMapper = {
  serializedName: "Switch",
  type: {
    name: "Composite",
    className: "SwitchActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      on: {
        serializedName: "typeProperties.on",
        type: {
          name: "Composite",
          className: "Expression"
        }
      },
      cases: {
        serializedName: "typeProperties.cases",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "SwitchCase"
            }
          }
        }
      },
      defaultActivities: {
        serializedName: "typeProperties.defaultActivities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      }
    }
  }
};

export const ForEachActivity: coreHttp.CompositeMapper = {
  serializedName: "ForEach",
  type: {
    name: "Composite",
    className: "ForEachActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      isSequential: {
        serializedName: "typeProperties.isSequential",
        type: {
          name: "Boolean"
        }
      },
      batchCount: {
        constraints: {
          InclusiveMaximum: 50
        },
        serializedName: "typeProperties.batchCount",
        type: {
          name: "Number"
        }
      },
      items: {
        serializedName: "typeProperties.items",
        type: {
          name: "Composite",
          className: "Expression"
        }
      },
      activities: {
        serializedName: "typeProperties.activities",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      }
    }
  }
};

export const WaitActivity: coreHttp.CompositeMapper = {
  serializedName: "Wait",
  type: {
    name: "Composite",
    className: "WaitActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      waitTimeInSeconds: {
        serializedName: "typeProperties.waitTimeInSeconds",
        required: true,
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const UntilActivity: coreHttp.CompositeMapper = {
  serializedName: "Until",
  type: {
    name: "Composite",
    className: "UntilActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      expression: {
        serializedName: "typeProperties.expression",
        type: {
          name: "Composite",
          className: "Expression"
        }
      },
      timeout: {
        serializedName: "typeProperties.timeout",
        type: {
          name: "any"
        }
      },
      activities: {
        serializedName: "typeProperties.activities",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      }
    }
  }
};

export const ValidationActivity: coreHttp.CompositeMapper = {
  serializedName: "Validation",
  type: {
    name: "Composite",
    className: "ValidationActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      timeout: {
        serializedName: "typeProperties.timeout",
        type: {
          name: "any"
        }
      },
      sleep: {
        serializedName: "typeProperties.sleep",
        type: {
          name: "any"
        }
      },
      minimumSize: {
        serializedName: "typeProperties.minimumSize",
        type: {
          name: "any"
        }
      },
      childItems: {
        serializedName: "typeProperties.childItems",
        type: {
          name: "any"
        }
      },
      dataset: {
        serializedName: "typeProperties.dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      }
    }
  }
};

export const FilterActivity: coreHttp.CompositeMapper = {
  serializedName: "Filter",
  type: {
    name: "Composite",
    className: "FilterActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      items: {
        serializedName: "typeProperties.items",
        type: {
          name: "Composite",
          className: "Expression"
        }
      },
      condition: {
        serializedName: "typeProperties.condition",
        type: {
          name: "Composite",
          className: "Expression"
        }
      }
    }
  }
};

export const SetVariableActivity: coreHttp.CompositeMapper = {
  serializedName: "SetVariable",
  type: {
    name: "Composite",
    className: "SetVariableActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      variableName: {
        serializedName: "typeProperties.variableName",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "typeProperties.value",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AppendVariableActivity: coreHttp.CompositeMapper = {
  serializedName: "AppendVariable",
  type: {
    name: "Composite",
    className: "AppendVariableActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      variableName: {
        serializedName: "typeProperties.variableName",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "typeProperties.value",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const WebHookActivity: coreHttp.CompositeMapper = {
  serializedName: "WebHook",
  type: {
    name: "Composite",
    className: "WebHookActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ControlActivity.type.modelProperties,
      method: {
        serializedName: "typeProperties.method",
        required: true,
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "any"
        }
      },
      timeout: {
        serializedName: "typeProperties.timeout",
        type: {
          name: "String"
        }
      },
      headers: {
        serializedName: "typeProperties.headers",
        type: {
          name: "any"
        }
      },
      body: {
        serializedName: "typeProperties.body",
        type: {
          name: "any"
        }
      },
      authentication: {
        serializedName: "typeProperties.authentication",
        type: {
          name: "Composite",
          className: "WebActivityAuthentication"
        }
      },
      reportStatusOnCallBack: {
        serializedName: "typeProperties.reportStatusOnCallBack",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CopyActivity: coreHttp.CompositeMapper = {
  serializedName: "Copy",
  type: {
    name: "Composite",
    className: "CopyActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      inputs: {
        serializedName: "inputs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetReference"
            }
          }
        }
      },
      outputs: {
        serializedName: "outputs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetReference"
            }
          }
        }
      },
      source: {
        serializedName: "typeProperties.source",
        type: {
          name: "Composite",
          className: "CopySource"
        }
      },
      sink: {
        serializedName: "typeProperties.sink",
        type: {
          name: "Composite",
          className: "CopySink"
        }
      },
      translator: {
        serializedName: "typeProperties.translator",
        type: {
          name: "any"
        }
      },
      enableStaging: {
        serializedName: "typeProperties.enableStaging",
        type: {
          name: "any"
        }
      },
      stagingSettings: {
        serializedName: "typeProperties.stagingSettings",
        type: {
          name: "Composite",
          className: "StagingSettings"
        }
      },
      parallelCopies: {
        serializedName: "typeProperties.parallelCopies",
        type: {
          name: "any"
        }
      },
      dataIntegrationUnits: {
        serializedName: "typeProperties.dataIntegrationUnits",
        type: {
          name: "any"
        }
      },
      enableSkipIncompatibleRow: {
        serializedName: "typeProperties.enableSkipIncompatibleRow",
        type: {
          name: "any"
        }
      },
      redirectIncompatibleRowSettings: {
        serializedName: "typeProperties.redirectIncompatibleRowSettings",
        type: {
          name: "Composite",
          className: "RedirectIncompatibleRowSettings"
        }
      },
      preserveRules: {
        serializedName: "typeProperties.preserveRules",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      preserve: {
        serializedName: "typeProperties.preserve",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      }
    }
  }
};

export const HDInsightHiveActivity: coreHttp.CompositeMapper = {
  serializedName: "HDInsightHive",
  type: {
    name: "Composite",
    className: "HDInsightHiveActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      storageLinkedServices: {
        serializedName: "typeProperties.storageLinkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      arguments: {
        serializedName: "typeProperties.arguments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      getDebugInfo: {
        serializedName: "typeProperties.getDebugInfo",
        type: {
          name: "String"
        }
      },
      scriptPath: {
        serializedName: "typeProperties.scriptPath",
        type: {
          name: "any"
        }
      },
      scriptLinkedService: {
        serializedName: "typeProperties.scriptLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      defines: {
        serializedName: "typeProperties.defines",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      variables: {
        serializedName: "typeProperties.variables",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      queryTimeout: {
        serializedName: "typeProperties.queryTimeout",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const HDInsightPigActivity: coreHttp.CompositeMapper = {
  serializedName: "HDInsightPig",
  type: {
    name: "Composite",
    className: "HDInsightPigActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      storageLinkedServices: {
        serializedName: "typeProperties.storageLinkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      arguments: {
        serializedName: "typeProperties.arguments",
        type: {
          name: "any"
        }
      },
      getDebugInfo: {
        serializedName: "typeProperties.getDebugInfo",
        type: {
          name: "String"
        }
      },
      scriptPath: {
        serializedName: "typeProperties.scriptPath",
        type: {
          name: "any"
        }
      },
      scriptLinkedService: {
        serializedName: "typeProperties.scriptLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      defines: {
        serializedName: "typeProperties.defines",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HDInsightMapReduceActivity: coreHttp.CompositeMapper = {
  serializedName: "HDInsightMapReduce",
  type: {
    name: "Composite",
    className: "HDInsightMapReduceActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      storageLinkedServices: {
        serializedName: "typeProperties.storageLinkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      arguments: {
        serializedName: "typeProperties.arguments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      getDebugInfo: {
        serializedName: "typeProperties.getDebugInfo",
        type: {
          name: "String"
        }
      },
      className: {
        serializedName: "typeProperties.className",
        required: true,
        type: {
          name: "any"
        }
      },
      jarFilePath: {
        serializedName: "typeProperties.jarFilePath",
        required: true,
        type: {
          name: "any"
        }
      },
      jarLinkedService: {
        serializedName: "typeProperties.jarLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      jarLibs: {
        serializedName: "typeProperties.jarLibs",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      defines: {
        serializedName: "typeProperties.defines",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HDInsightStreamingActivity: coreHttp.CompositeMapper = {
  serializedName: "HDInsightStreaming",
  type: {
    name: "Composite",
    className: "HDInsightStreamingActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      storageLinkedServices: {
        serializedName: "typeProperties.storageLinkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      arguments: {
        serializedName: "typeProperties.arguments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      getDebugInfo: {
        serializedName: "typeProperties.getDebugInfo",
        type: {
          name: "String"
        }
      },
      mapper: {
        serializedName: "typeProperties.mapper",
        required: true,
        type: {
          name: "any"
        }
      },
      reducer: {
        serializedName: "typeProperties.reducer",
        required: true,
        type: {
          name: "any"
        }
      },
      input: {
        serializedName: "typeProperties.input",
        required: true,
        type: {
          name: "any"
        }
      },
      output: {
        serializedName: "typeProperties.output",
        required: true,
        type: {
          name: "any"
        }
      },
      filePaths: {
        serializedName: "typeProperties.filePaths",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      fileLinkedService: {
        serializedName: "typeProperties.fileLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      combiner: {
        serializedName: "typeProperties.combiner",
        type: {
          name: "any"
        }
      },
      commandEnvironment: {
        serializedName: "typeProperties.commandEnvironment",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      defines: {
        serializedName: "typeProperties.defines",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const HDInsightSparkActivity: coreHttp.CompositeMapper = {
  serializedName: "HDInsightSpark",
  type: {
    name: "Composite",
    className: "HDInsightSparkActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      rootPath: {
        serializedName: "typeProperties.rootPath",
        required: true,
        type: {
          name: "any"
        }
      },
      entryFilePath: {
        serializedName: "typeProperties.entryFilePath",
        required: true,
        type: {
          name: "any"
        }
      },
      arguments: {
        serializedName: "typeProperties.arguments",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      getDebugInfo: {
        serializedName: "typeProperties.getDebugInfo",
        type: {
          name: "String"
        }
      },
      sparkJobLinkedService: {
        serializedName: "typeProperties.sparkJobLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      className: {
        serializedName: "typeProperties.className",
        type: {
          name: "String"
        }
      },
      proxyUser: {
        serializedName: "typeProperties.proxyUser",
        type: {
          name: "any"
        }
      },
      sparkConfig: {
        serializedName: "typeProperties.sparkConfig",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const ExecuteSsisPackageActivity: coreHttp.CompositeMapper = {
  serializedName: "ExecuteSSISPackage",
  type: {
    name: "Composite",
    className: "ExecuteSsisPackageActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      packageLocation: {
        serializedName: "typeProperties.packageLocation",
        type: {
          name: "Composite",
          className: "SsisPackageLocation"
        }
      },
      runtime: {
        serializedName: "typeProperties.runtime",
        type: {
          name: "any"
        }
      },
      loggingLevel: {
        serializedName: "typeProperties.loggingLevel",
        type: {
          name: "any"
        }
      },
      environmentPath: {
        serializedName: "typeProperties.environmentPath",
        type: {
          name: "any"
        }
      },
      executionCredential: {
        serializedName: "typeProperties.executionCredential",
        type: {
          name: "Composite",
          className: "SsisExecutionCredential"
        }
      },
      connectVia: {
        serializedName: "typeProperties.connectVia",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeReference"
        }
      },
      projectParameters: {
        serializedName: "typeProperties.projectParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "SsisExecutionParameter" }
          }
        }
      },
      packageParameters: {
        serializedName: "typeProperties.packageParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "SsisExecutionParameter" }
          }
        }
      },
      projectConnectionManagers: {
        serializedName: "typeProperties.projectConnectionManagers",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Dictionary",
              value: {
                type: { name: "Composite", className: "SsisExecutionParameter" }
              }
            }
          }
        }
      },
      packageConnectionManagers: {
        serializedName: "typeProperties.packageConnectionManagers",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "Dictionary",
              value: {
                type: { name: "Composite", className: "SsisExecutionParameter" }
              }
            }
          }
        }
      },
      propertyOverrides: {
        serializedName: "typeProperties.propertyOverrides",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "SsisPropertyOverride" }
          }
        }
      },
      logLocation: {
        serializedName: "typeProperties.logLocation",
        type: {
          name: "Composite",
          className: "SsisLogLocation"
        }
      }
    }
  }
};

export const CustomActivity: coreHttp.CompositeMapper = {
  serializedName: "Custom",
  type: {
    name: "Composite",
    className: "CustomActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      command: {
        serializedName: "typeProperties.command",
        required: true,
        type: {
          name: "any"
        }
      },
      resourceLinkedService: {
        serializedName: "typeProperties.resourceLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      folderPath: {
        serializedName: "typeProperties.folderPath",
        type: {
          name: "any"
        }
      },
      referenceObjects: {
        serializedName: "typeProperties.referenceObjects",
        type: {
          name: "Composite",
          className: "CustomActivityReferenceObject"
        }
      },
      extendedProperties: {
        serializedName: "typeProperties.extendedProperties",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      retentionTimeInDays: {
        serializedName: "typeProperties.retentionTimeInDays",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SqlServerStoredProcedureActivity: coreHttp.CompositeMapper = {
  serializedName: "SqlServerStoredProcedure",
  type: {
    name: "Composite",
    className: "SqlServerStoredProcedureActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      storedProcedureName: {
        serializedName: "typeProperties.storedProcedureName",
        required: true,
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "typeProperties.storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      }
    }
  }
};

export const DeleteActivity: coreHttp.CompositeMapper = {
  serializedName: "Delete",
  type: {
    name: "Composite",
    className: "DeleteActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      recursive: {
        serializedName: "typeProperties.recursive",
        type: {
          name: "any"
        }
      },
      maxConcurrentConnections: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "typeProperties.maxConcurrentConnections",
        type: {
          name: "Number"
        }
      },
      enableLogging: {
        serializedName: "typeProperties.enableLogging",
        type: {
          name: "any"
        }
      },
      logStorageSettings: {
        serializedName: "typeProperties.logStorageSettings",
        type: {
          name: "Composite",
          className: "LogStorageSettings"
        }
      },
      dataset: {
        serializedName: "typeProperties.dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      }
    }
  }
};

export const AzureDataExplorerCommandActivity: coreHttp.CompositeMapper = {
  serializedName: "AzureDataExplorerCommand",
  type: {
    name: "Composite",
    className: "AzureDataExplorerCommandActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      command: {
        serializedName: "typeProperties.command",
        required: true,
        type: {
          name: "any"
        }
      },
      commandTimeout: {
        serializedName: "typeProperties.commandTimeout",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const LookupActivity: coreHttp.CompositeMapper = {
  serializedName: "Lookup",
  type: {
    name: "Composite",
    className: "LookupActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      source: {
        serializedName: "typeProperties.source",
        type: {
          name: "Composite",
          className: "CopySource"
        }
      },
      dataset: {
        serializedName: "typeProperties.dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      },
      firstRowOnly: {
        serializedName: "typeProperties.firstRowOnly",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const WebActivity: coreHttp.CompositeMapper = {
  serializedName: "WebActivity",
  type: {
    name: "Composite",
    className: "WebActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      method: {
        serializedName: "typeProperties.method",
        required: true,
        type: {
          name: "String"
        }
      },
      url: {
        serializedName: "typeProperties.url",
        required: true,
        type: {
          name: "any"
        }
      },
      headers: {
        serializedName: "typeProperties.headers",
        type: {
          name: "any"
        }
      },
      body: {
        serializedName: "typeProperties.body",
        type: {
          name: "any"
        }
      },
      authentication: {
        serializedName: "typeProperties.authentication",
        type: {
          name: "Composite",
          className: "WebActivityAuthentication"
        }
      },
      datasets: {
        serializedName: "typeProperties.datasets",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatasetReference"
            }
          }
        }
      },
      linkedServices: {
        serializedName: "typeProperties.linkedServices",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "LinkedServiceReference"
            }
          }
        }
      },
      connectVia: {
        serializedName: "typeProperties.connectVia",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeReference"
        }
      }
    }
  }
};

export const GetMetadataActivity: coreHttp.CompositeMapper = {
  serializedName: "GetMetadata",
  type: {
    name: "Composite",
    className: "GetMetadataActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      dataset: {
        serializedName: "typeProperties.dataset",
        type: {
          name: "Composite",
          className: "DatasetReference"
        }
      },
      fieldList: {
        serializedName: "typeProperties.fieldList",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      }
    }
  }
};

export const AzureMLBatchExecutionActivity: coreHttp.CompositeMapper = {
  serializedName: "AzureMLBatchExecution",
  type: {
    name: "Composite",
    className: "AzureMLBatchExecutionActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      globalParameters: {
        serializedName: "typeProperties.globalParameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      webServiceOutputs: {
        serializedName: "typeProperties.webServiceOutputs",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "AzureMLWebServiceFile" }
          }
        }
      },
      webServiceInputs: {
        serializedName: "typeProperties.webServiceInputs",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "AzureMLWebServiceFile" }
          }
        }
      }
    }
  }
};

export const AzureMLUpdateResourceActivity: coreHttp.CompositeMapper = {
  serializedName: "AzureMLUpdateResource",
  type: {
    name: "Composite",
    className: "AzureMLUpdateResourceActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      trainedModelName: {
        serializedName: "typeProperties.trainedModelName",
        required: true,
        type: {
          name: "any"
        }
      },
      trainedModelLinkedServiceName: {
        serializedName: "typeProperties.trainedModelLinkedServiceName",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      trainedModelFilePath: {
        serializedName: "typeProperties.trainedModelFilePath",
        required: true,
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureMLExecutePipelineActivity: coreHttp.CompositeMapper = {
  serializedName: "AzureMLExecutePipeline",
  type: {
    name: "Composite",
    className: "AzureMLExecutePipelineActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      mlPipelineId: {
        serializedName: "typeProperties.mlPipelineId",
        required: true,
        type: {
          name: "any"
        }
      },
      experimentName: {
        serializedName: "typeProperties.experimentName",
        type: {
          name: "any"
        }
      },
      mlPipelineParameters: {
        serializedName: "typeProperties.mlPipelineParameters",
        type: {
          name: "any"
        }
      },
      mlParentRunId: {
        serializedName: "typeProperties.mlParentRunId",
        type: {
          name: "any"
        }
      },
      continueOnStepFailure: {
        serializedName: "typeProperties.continueOnStepFailure",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DataLakeAnalyticsUsqlActivity: coreHttp.CompositeMapper = {
  serializedName: "DataLakeAnalyticsU-SQL",
  type: {
    name: "Composite",
    className: "DataLakeAnalyticsUsqlActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      scriptPath: {
        serializedName: "typeProperties.scriptPath",
        required: true,
        type: {
          name: "any"
        }
      },
      scriptLinkedService: {
        serializedName: "typeProperties.scriptLinkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      },
      degreeOfParallelism: {
        serializedName: "typeProperties.degreeOfParallelism",
        type: {
          name: "any"
        }
      },
      priority: {
        serializedName: "typeProperties.priority",
        type: {
          name: "any"
        }
      },
      parameters: {
        serializedName: "typeProperties.parameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      runtimeVersion: {
        serializedName: "typeProperties.runtimeVersion",
        type: {
          name: "any"
        }
      },
      compilationMode: {
        serializedName: "typeProperties.compilationMode",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DatabricksNotebookActivity: coreHttp.CompositeMapper = {
  serializedName: "DatabricksNotebook",
  type: {
    name: "Composite",
    className: "DatabricksNotebookActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      notebookPath: {
        serializedName: "typeProperties.notebookPath",
        required: true,
        type: {
          name: "any"
        }
      },
      baseParameters: {
        serializedName: "typeProperties.baseParameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      libraries: {
        serializedName: "typeProperties.libraries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      }
    }
  }
};

export const DatabricksSparkJarActivity: coreHttp.CompositeMapper = {
  serializedName: "DatabricksSparkJar",
  type: {
    name: "Composite",
    className: "DatabricksSparkJarActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      mainClassName: {
        serializedName: "typeProperties.mainClassName",
        required: true,
        type: {
          name: "any"
        }
      },
      parameters: {
        serializedName: "typeProperties.parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      libraries: {
        serializedName: "typeProperties.libraries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      }
    }
  }
};

export const DatabricksSparkPythonActivity: coreHttp.CompositeMapper = {
  serializedName: "DatabricksSparkPython",
  type: {
    name: "Composite",
    className: "DatabricksSparkPythonActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      pythonFile: {
        serializedName: "typeProperties.pythonFile",
        required: true,
        type: {
          name: "any"
        }
      },
      parameters: {
        serializedName: "typeProperties.parameters",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      libraries: {
        serializedName: "typeProperties.libraries",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Dictionary",
              value: { type: { name: "any" } }
            }
          }
        }
      }
    }
  }
};

export const AzureFunctionActivity: coreHttp.CompositeMapper = {
  serializedName: "AzureFunctionActivity",
  type: {
    name: "Composite",
    className: "AzureFunctionActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      method: {
        serializedName: "typeProperties.method",
        required: true,
        type: {
          name: "String"
        }
      },
      functionName: {
        serializedName: "typeProperties.functionName",
        required: true,
        type: {
          name: "any"
        }
      },
      headers: {
        serializedName: "typeProperties.headers",
        type: {
          name: "any"
        }
      },
      body: {
        serializedName: "typeProperties.body",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ExecuteDataFlowActivity: coreHttp.CompositeMapper = {
  serializedName: "ExecuteDataFlow",
  type: {
    name: "Composite",
    className: "ExecuteDataFlowActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      dataFlow: {
        serializedName: "typeProperties.dataFlow",
        type: {
          name: "Composite",
          className: "DataFlowReference"
        }
      },
      staging: {
        serializedName: "typeProperties.staging",
        type: {
          name: "Composite",
          className: "DataFlowStagingInfo"
        }
      },
      integrationRuntime: {
        serializedName: "typeProperties.integrationRuntime",
        type: {
          name: "Composite",
          className: "IntegrationRuntimeReference"
        }
      },
      compute: {
        serializedName: "typeProperties.compute",
        type: {
          name: "Composite",
          className: "ExecuteDataFlowActivityTypePropertiesCompute"
        }
      }
    }
  }
};

export const SynapseNotebookActivity: coreHttp.CompositeMapper = {
  serializedName: "SynapseNotebook",
  type: {
    name: "Composite",
    className: "SynapseNotebookActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      notebook: {
        serializedName: "typeProperties.notebook",
        type: {
          name: "Composite",
          className: "SynapseNotebookReference"
        }
      },
      parameters: {
        serializedName: "typeProperties.parameters",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      }
    }
  }
};

export const SynapseSparkJobDefinitionActivity: coreHttp.CompositeMapper = {
  serializedName: "SparkJob",
  type: {
    name: "Composite",
    className: "SynapseSparkJobDefinitionActivity",
    uberParent: "Activity",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Activity.type.polymorphicDiscriminator,
    modelProperties: {
      ...ExecutionActivity.type.modelProperties,
      sparkJob: {
        serializedName: "typeProperties.sparkJob",
        type: {
          name: "Composite",
          className: "SynapseSparkJobReference"
        }
      }
    }
  }
};

export const ScheduleTrigger: coreHttp.CompositeMapper = {
  serializedName: "ScheduleTrigger",
  type: {
    name: "Composite",
    className: "ScheduleTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...MultiplePipelineTrigger.type.modelProperties,
      recurrence: {
        serializedName: "typeProperties.recurrence",
        type: {
          name: "Composite",
          className: "ScheduleTriggerRecurrence"
        }
      }
    }
  }
};

export const BlobTrigger: coreHttp.CompositeMapper = {
  serializedName: "BlobTrigger",
  type: {
    name: "Composite",
    className: "BlobTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...MultiplePipelineTrigger.type.modelProperties,
      folderPath: {
        serializedName: "typeProperties.folderPath",
        required: true,
        type: {
          name: "String"
        }
      },
      maxConcurrency: {
        serializedName: "typeProperties.maxConcurrency",
        required: true,
        type: {
          name: "Number"
        }
      },
      linkedService: {
        serializedName: "typeProperties.linkedService",
        type: {
          name: "Composite",
          className: "LinkedServiceReference"
        }
      }
    }
  }
};

export const BlobEventsTrigger: coreHttp.CompositeMapper = {
  serializedName: "BlobEventsTrigger",
  type: {
    name: "Composite",
    className: "BlobEventsTrigger",
    uberParent: "Trigger",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: Trigger.type.polymorphicDiscriminator,
    modelProperties: {
      ...MultiplePipelineTrigger.type.modelProperties,
      blobPathBeginsWith: {
        serializedName: "typeProperties.blobPathBeginsWith",
        type: {
          name: "String"
        }
      },
      blobPathEndsWith: {
        serializedName: "typeProperties.blobPathEndsWith",
        type: {
          name: "String"
        }
      },
      ignoreEmptyBlobs: {
        serializedName: "typeProperties.ignoreEmptyBlobs",
        type: {
          name: "Boolean"
        }
      },
      events: {
        serializedName: "typeProperties.events",
        required: true,
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      scope: {
        serializedName: "typeProperties.scope",
        required: true,
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureTableSource: coreHttp.CompositeMapper = {
  serializedName: "AzureTableSource",
  type: {
    name: "Composite",
    className: "AzureTableSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      azureTableSourceQuery: {
        serializedName: "azureTableSourceQuery",
        type: {
          name: "any"
        }
      },
      azureTableSourceIgnoreTableNotFound: {
        serializedName: "azureTableSourceIgnoreTableNotFound",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const InformixSource: coreHttp.CompositeMapper = {
  serializedName: "InformixSource",
  type: {
    name: "Composite",
    className: "InformixSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const Db2Source: coreHttp.CompositeMapper = {
  serializedName: "Db2Source",
  type: {
    name: "Composite",
    className: "Db2Source",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const OdbcSource: coreHttp.CompositeMapper = {
  serializedName: "OdbcSource",
  type: {
    name: "Composite",
    className: "OdbcSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MySqlSource: coreHttp.CompositeMapper = {
  serializedName: "MySqlSource",
  type: {
    name: "Composite",
    className: "MySqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PostgreSqlSource: coreHttp.CompositeMapper = {
  serializedName: "PostgreSqlSource",
  type: {
    name: "Composite",
    className: "PostgreSqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SybaseSource: coreHttp.CompositeMapper = {
  serializedName: "SybaseSource",
  type: {
    name: "Composite",
    className: "SybaseSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapBwSource: coreHttp.CompositeMapper = {
  serializedName: "SapBwSource",
  type: {
    name: "Composite",
    className: "SapBwSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceSource: coreHttp.CompositeMapper = {
  serializedName: "SalesforceSource",
  type: {
    name: "Composite",
    className: "SalesforceSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      },
      readBehavior: {
        serializedName: "readBehavior",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const SapCloudForCustomerSource: coreHttp.CompositeMapper = {
  serializedName: "SapCloudForCustomerSource",
  type: {
    name: "Composite",
    className: "SapCloudForCustomerSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapEccSource: coreHttp.CompositeMapper = {
  serializedName: "SapEccSource",
  type: {
    name: "Composite",
    className: "SapEccSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapHanaSource: coreHttp.CompositeMapper = {
  serializedName: "SapHanaSource",
  type: {
    name: "Composite",
    className: "SapHanaSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      },
      packetSize: {
        serializedName: "packetSize",
        type: {
          name: "any"
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "String"
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "SapHanaPartitionSettings"
        }
      }
    }
  }
};

export const SapOpenHubSource: coreHttp.CompositeMapper = {
  serializedName: "SapOpenHubSource",
  type: {
    name: "Composite",
    className: "SapOpenHubSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      excludeLastRequest: {
        serializedName: "excludeLastRequest",
        type: {
          name: "any"
        }
      },
      baseRequestId: {
        serializedName: "baseRequestId",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SapTableSource: coreHttp.CompositeMapper = {
  serializedName: "SapTableSource",
  type: {
    name: "Composite",
    className: "SapTableSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      rowCount: {
        serializedName: "rowCount",
        type: {
          name: "any"
        }
      },
      rowSkips: {
        serializedName: "rowSkips",
        type: {
          name: "any"
        }
      },
      rfcTableFields: {
        serializedName: "rfcTableFields",
        type: {
          name: "any"
        }
      },
      rfcTableOptions: {
        serializedName: "rfcTableOptions",
        type: {
          name: "any"
        }
      },
      batchSize: {
        serializedName: "batchSize",
        type: {
          name: "any"
        }
      },
      customRfcReadTableFunctionModule: {
        serializedName: "customRfcReadTableFunctionModule",
        type: {
          name: "any"
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "String"
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "SapTablePartitionSettings"
        }
      }
    }
  }
};

export const SqlSource: coreHttp.CompositeMapper = {
  serializedName: "SqlSource",
  type: {
    name: "Composite",
    className: "SqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "any"
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      }
    }
  }
};

export const SqlServerSource: coreHttp.CompositeMapper = {
  serializedName: "SqlServerSource",
  type: {
    name: "Composite",
    className: "SqlServerSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "any"
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      produceAdditionalTypes: {
        serializedName: "produceAdditionalTypes",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureSqlSource: coreHttp.CompositeMapper = {
  serializedName: "AzureSqlSource",
  type: {
    name: "Composite",
    className: "AzureSqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "any"
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      produceAdditionalTypes: {
        serializedName: "produceAdditionalTypes",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SqlMISource: coreHttp.CompositeMapper = {
  serializedName: "SqlMISource",
  type: {
    name: "Composite",
    className: "SqlMISource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "any"
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "StoredProcedureParameter" }
          }
        }
      },
      produceAdditionalTypes: {
        serializedName: "produceAdditionalTypes",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SqlDWSource: coreHttp.CompositeMapper = {
  serializedName: "SqlDWSource",
  type: {
    name: "Composite",
    className: "SqlDWSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      sqlReaderQuery: {
        serializedName: "sqlReaderQuery",
        type: {
          name: "any"
        }
      },
      sqlReaderStoredProcedureName: {
        serializedName: "sqlReaderStoredProcedureName",
        type: {
          name: "any"
        }
      },
      storedProcedureParameters: {
        serializedName: "storedProcedureParameters",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureMySqlSource: coreHttp.CompositeMapper = {
  serializedName: "AzureMySqlSource",
  type: {
    name: "Composite",
    className: "AzureMySqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const TeradataSource: coreHttp.CompositeMapper = {
  serializedName: "TeradataSource",
  type: {
    name: "Composite",
    className: "TeradataSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "String"
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "TeradataPartitionSettings"
        }
      }
    }
  }
};

export const CassandraSource: coreHttp.CompositeMapper = {
  serializedName: "CassandraSource",
  type: {
    name: "Composite",
    className: "CassandraSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      },
      consistencyLevel: {
        serializedName: "consistencyLevel",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AmazonMWSSource: coreHttp.CompositeMapper = {
  serializedName: "AmazonMWSSource",
  type: {
    name: "Composite",
    className: "AmazonMWSSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzurePostgreSqlSource: coreHttp.CompositeMapper = {
  serializedName: "AzurePostgreSqlSource",
  type: {
    name: "Composite",
    className: "AzurePostgreSqlSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ConcurSource: coreHttp.CompositeMapper = {
  serializedName: "ConcurSource",
  type: {
    name: "Composite",
    className: "ConcurSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const CouchbaseSource: coreHttp.CompositeMapper = {
  serializedName: "CouchbaseSource",
  type: {
    name: "Composite",
    className: "CouchbaseSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DrillSource: coreHttp.CompositeMapper = {
  serializedName: "DrillSource",
  type: {
    name: "Composite",
    className: "DrillSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const EloquaSource: coreHttp.CompositeMapper = {
  serializedName: "EloquaSource",
  type: {
    name: "Composite",
    className: "EloquaSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GoogleBigQuerySource: coreHttp.CompositeMapper = {
  serializedName: "GoogleBigQuerySource",
  type: {
    name: "Composite",
    className: "GoogleBigQuerySource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GreenplumSource: coreHttp.CompositeMapper = {
  serializedName: "GreenplumSource",
  type: {
    name: "Composite",
    className: "GreenplumSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HBaseSource: coreHttp.CompositeMapper = {
  serializedName: "HBaseSource",
  type: {
    name: "Composite",
    className: "HBaseSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HiveSource: coreHttp.CompositeMapper = {
  serializedName: "HiveSource",
  type: {
    name: "Composite",
    className: "HiveSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const HubspotSource: coreHttp.CompositeMapper = {
  serializedName: "HubspotSource",
  type: {
    name: "Composite",
    className: "HubspotSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ImpalaSource: coreHttp.CompositeMapper = {
  serializedName: "ImpalaSource",
  type: {
    name: "Composite",
    className: "ImpalaSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const JiraSource: coreHttp.CompositeMapper = {
  serializedName: "JiraSource",
  type: {
    name: "Composite",
    className: "JiraSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MagentoSource: coreHttp.CompositeMapper = {
  serializedName: "MagentoSource",
  type: {
    name: "Composite",
    className: "MagentoSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MariaDBSource: coreHttp.CompositeMapper = {
  serializedName: "MariaDBSource",
  type: {
    name: "Composite",
    className: "MariaDBSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AzureMariaDBSource: coreHttp.CompositeMapper = {
  serializedName: "AzureMariaDBSource",
  type: {
    name: "Composite",
    className: "AzureMariaDBSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const MarketoSource: coreHttp.CompositeMapper = {
  serializedName: "MarketoSource",
  type: {
    name: "Composite",
    className: "MarketoSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PaypalSource: coreHttp.CompositeMapper = {
  serializedName: "PaypalSource",
  type: {
    name: "Composite",
    className: "PaypalSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PhoenixSource: coreHttp.CompositeMapper = {
  serializedName: "PhoenixSource",
  type: {
    name: "Composite",
    className: "PhoenixSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const PrestoSource: coreHttp.CompositeMapper = {
  serializedName: "PrestoSource",
  type: {
    name: "Composite",
    className: "PrestoSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const QuickBooksSource: coreHttp.CompositeMapper = {
  serializedName: "QuickBooksSource",
  type: {
    name: "Composite",
    className: "QuickBooksSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ServiceNowSource: coreHttp.CompositeMapper = {
  serializedName: "ServiceNowSource",
  type: {
    name: "Composite",
    className: "ServiceNowSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ShopifySource: coreHttp.CompositeMapper = {
  serializedName: "ShopifySource",
  type: {
    name: "Composite",
    className: "ShopifySource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SparkSource: coreHttp.CompositeMapper = {
  serializedName: "SparkSource",
  type: {
    name: "Composite",
    className: "SparkSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SquareSource: coreHttp.CompositeMapper = {
  serializedName: "SquareSource",
  type: {
    name: "Composite",
    className: "SquareSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const XeroSource: coreHttp.CompositeMapper = {
  serializedName: "XeroSource",
  type: {
    name: "Composite",
    className: "XeroSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ZohoSource: coreHttp.CompositeMapper = {
  serializedName: "ZohoSource",
  type: {
    name: "Composite",
    className: "ZohoSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const NetezzaSource: coreHttp.CompositeMapper = {
  serializedName: "NetezzaSource",
  type: {
    name: "Composite",
    className: "NetezzaSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      },
      partitionOption: {
        serializedName: "partitionOption",
        type: {
          name: "String"
        }
      },
      partitionSettings: {
        serializedName: "partitionSettings",
        type: {
          name: "Composite",
          className: "NetezzaPartitionSettings"
        }
      }
    }
  }
};

export const VerticaSource: coreHttp.CompositeMapper = {
  serializedName: "VerticaSource",
  type: {
    name: "Composite",
    className: "VerticaSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const SalesforceMarketingCloudSource: coreHttp.CompositeMapper = {
  serializedName: "SalesforceMarketingCloudSource",
  type: {
    name: "Composite",
    className: "SalesforceMarketingCloudSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const ResponsysSource: coreHttp.CompositeMapper = {
  serializedName: "ResponsysSource",
  type: {
    name: "Composite",
    className: "ResponsysSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const DynamicsAXSource: coreHttp.CompositeMapper = {
  serializedName: "DynamicsAXSource",
  type: {
    name: "Composite",
    className: "DynamicsAXSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const OracleServiceCloudSource: coreHttp.CompositeMapper = {
  serializedName: "OracleServiceCloudSource",
  type: {
    name: "Composite",
    className: "OracleServiceCloudSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const GoogleAdWordsSource: coreHttp.CompositeMapper = {
  serializedName: "GoogleAdWordsSource",
  type: {
    name: "Composite",
    className: "GoogleAdWordsSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      }
    }
  }
};

export const AmazonRedshiftSource: coreHttp.CompositeMapper = {
  serializedName: "AmazonRedshiftSource",
  type: {
    name: "Composite",
    className: "AmazonRedshiftSource",
    uberParent: "CopySource",
    additionalProperties: { type: { name: "Object" } },
    polymorphicDiscriminator: CopySource.type.polymorphicDiscriminator,
    modelProperties: {
      ...TabularSource.type.modelProperties,
      query: {
        serializedName: "query",
        type: {
          name: "any"
        }
      },
      redshiftUnloadSettings: {
        serializedName: "redshiftUnloadSettings",
        type: {
          name: "Composite",
          className: "RedshiftUnloadSettings"
        }
      }
    }
  }
};

export const TumblingWindowTriggerDependencyReference: coreHttp.CompositeMapper = {
  serializedName: "TumblingWindowTriggerDependencyReference",
  type: {
    name: "Composite",
    className: "TumblingWindowTriggerDependencyReference",
    uberParent: "DependencyReference",
    polymorphicDiscriminator: DependencyReference.type.polymorphicDiscriminator,
    modelProperties: {
      ...TriggerDependencyReference.type.modelProperties,
      offset: {
        constraints: {
          Pattern: new RegExp("((d+).)?(dd):(60|([0-5][0-9])):(60|([0-5][0-9]))"),
          MaxLength: 15,
          MinLength: 8
        },
        serializedName: "offset",
        type: {
          name: "String"
        }
      },
      size: {
        constraints: {
          Pattern: new RegExp("((d+).)?(dd):(60|([0-5][0-9])):(60|([0-5][0-9]))"),
          MaxLength: 15,
          MinLength: 8
        },
        serializedName: "size",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const LinkedServiceResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LinkedServiceResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LinkedService"
        }
      }
    }
  }
};

export const DatasetResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DatasetResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Dataset"
        }
      }
    }
  }
};

export const PipelineResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "PipelineResource",
    additionalProperties: { type: { name: "Object" } },
    modelProperties: {
      ...SubResource.type.modelProperties,
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      activities: {
        serializedName: "properties.activities",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Activity"
            }
          }
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "ParameterSpecification" }
          }
        }
      },
      variables: {
        serializedName: "properties.variables",
        type: {
          name: "Dictionary",
          value: {
            type: { name: "Composite", className: "VariableSpecification" }
          }
        }
      },
      concurrency: {
        constraints: {
          InclusiveMinimum: 1
        },
        serializedName: "properties.concurrency",
        type: {
          name: "Number"
        }
      },
      annotations: {
        serializedName: "properties.annotations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "any"
            }
          }
        }
      },
      runDimensions: {
        serializedName: "properties.runDimensions",
        type: {
          name: "Dictionary",
          value: { type: { name: "any" } }
        }
      },
      folder: {
        serializedName: "properties.folder",
        type: {
          name: "Composite",
          className: "PipelineFolder"
        }
      }
    }
  }
};

export const TriggerResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "TriggerResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "Trigger"
        }
      }
    }
  }
};

export const DataFlowResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DataFlow"
        }
      }
    }
  }
};

export const SparkJobDefinitionResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "SparkJobDefinitionResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "SparkJobDefinition"
        }
      }
    }
  }
};

export const IntegrationRuntimeResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "IntegrationRuntimeResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "IntegrationRuntime"
        }
      }
    }
  }
};

export const LibraryResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "LibraryResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "LibraryResourceProperties"
        }
      }
    }
  }
};

export const RerunTriggerResource: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "RerunTriggerResource",
    modelProperties: {
      ...SubResource.type.modelProperties,
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "RerunTumblingWindowTrigger"
        }
      }
    }
  }
};

export const DataFlowDebugSessionCreateDataFlowDebugSessionHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugSessionCreateDataFlowDebugSessionHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataFlowDebugSessionExecuteCommandHeaders: coreHttp.CompositeMapper = {
  type: {
    name: "Composite",
    className: "DataFlowDebugSessionExecuteCommandHeaders",
    modelProperties: {
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export let discriminators = {
  LinkedService: LinkedService,
  Dataset: Dataset,
  Activity: Activity,
  Trigger: Trigger,
  DataFlow: DataFlow,
  IntegrationRuntime: IntegrationRuntime,
  SecretBase: SecretBase,
  DatasetLocation: DatasetLocation,
  DatasetStorageFormat: DatasetStorageFormat,
  DatasetCompression: DatasetCompression,
  WebLinkedServiceTypeProperties: WebLinkedServiceTypeProperties,
  StoreReadSettings: StoreReadSettings,
  StoreWriteSettings: StoreWriteSettings,
  FormatReadSettings: FormatReadSettings,
  FormatWriteSettings: FormatWriteSettings,
  CopySource: CopySource,
  CopySink: CopySink,
  CopyTranslator: CopyTranslator,
  DependencyReference: DependencyReference,
  "CustomSetupBase.undefined": CustomSetupBase,
  LinkedIntegrationRuntimeType: LinkedIntegrationRuntimeType,
  "LinkedService.AzureStorage": AzureStorageLinkedService,
  "LinkedService.AzureBlobStorage": AzureBlobStorageLinkedService,
  "LinkedService.AzureTableStorage": AzureTableStorageLinkedService,
  "LinkedService.AzureSqlDW": AzureSqlDWLinkedService,
  "LinkedService.SqlServer": SqlServerLinkedService,
  "LinkedService.AzureSqlDatabase": AzureSqlDatabaseLinkedService,
  "LinkedService.AzureSqlMI": AzureSqlMILinkedService,
  "LinkedService.AzureBatch": AzureBatchLinkedService,
  "LinkedService.AzureKeyVault": AzureKeyVaultLinkedService,
  "LinkedService.CosmosDb": CosmosDbLinkedService,
  "LinkedService.Dynamics": DynamicsLinkedService,
  "LinkedService.DynamicsCrm": DynamicsCrmLinkedService,
  "LinkedService.CommonDataServiceForApps": CommonDataServiceForAppsLinkedService,
  "LinkedService.HDInsight": HDInsightLinkedService,
  "LinkedService.FileServer": FileServerLinkedService,
  "LinkedService.AzureFileStorage": AzureFileStorageLinkedService,
  "LinkedService.GoogleCloudStorage": GoogleCloudStorageLinkedService,
  "LinkedService.Oracle": OracleLinkedService,
  "LinkedService.AzureMySql": AzureMySqlLinkedService,
  "LinkedService.MySql": MySqlLinkedService,
  "LinkedService.PostgreSql": PostgreSqlLinkedService,
  "LinkedService.Sybase": SybaseLinkedService,
  "LinkedService.Db2": Db2LinkedService,
  "LinkedService.Teradata": TeradataLinkedService,
  "LinkedService.AzureML": AzureMLLinkedService,
  "LinkedService.AzureMLService": AzureMLServiceLinkedService,
  "LinkedService.Odbc": OdbcLinkedService,
  "LinkedService.Informix": InformixLinkedService,
  "LinkedService.MicrosoftAccess": MicrosoftAccessLinkedService,
  "LinkedService.Hdfs": HdfsLinkedService,
  "LinkedService.OData": ODataLinkedService,
  "LinkedService.Web": WebLinkedService,
  "LinkedService.Cassandra": CassandraLinkedService,
  "LinkedService.MongoDb": MongoDbLinkedService,
  "LinkedService.MongoDbV2": MongoDbV2LinkedService,
  "LinkedService.CosmosDbMongoDbApi": CosmosDbMongoDbApiLinkedService,
  "LinkedService.AzureDataLakeStore": AzureDataLakeStoreLinkedService,
  "LinkedService.AzureBlobFS": AzureBlobFSLinkedService,
  "LinkedService.Office365": Office365LinkedService,
  "LinkedService.Salesforce": SalesforceLinkedService,
  "LinkedService.SalesforceServiceCloud": SalesforceServiceCloudLinkedService,
  "LinkedService.SapCloudForCustomer": SapCloudForCustomerLinkedService,
  "LinkedService.SapEcc": SapEccLinkedService,
  "LinkedService.SapOpenHub": SapOpenHubLinkedService,
  "LinkedService.RestService": RestServiceLinkedService,
  "LinkedService.AmazonS3": AmazonS3LinkedService,
  "LinkedService.AmazonRedshift": AmazonRedshiftLinkedService,
  "LinkedService.CustomDataSource": CustomDataSourceLinkedService,
  "LinkedService.AzureSearch": AzureSearchLinkedService,
  "LinkedService.HttpServer": HttpLinkedService,
  "LinkedService.FtpServer": FtpServerLinkedService,
  "LinkedService.Sftp": SftpServerLinkedService,
  "LinkedService.SapBW": SapBWLinkedService,
  "LinkedService.SapHana": SapHanaLinkedService,
  "LinkedService.AmazonMWS": AmazonMWSLinkedService,
  "LinkedService.AzurePostgreSql": AzurePostgreSqlLinkedService,
  "LinkedService.Concur": ConcurLinkedService,
  "LinkedService.Couchbase": CouchbaseLinkedService,
  "LinkedService.Drill": DrillLinkedService,
  "LinkedService.Eloqua": EloquaLinkedService,
  "LinkedService.GoogleBigQuery": GoogleBigQueryLinkedService,
  "LinkedService.Greenplum": GreenplumLinkedService,
  "LinkedService.HBase": HBaseLinkedService,
  "LinkedService.Hive": HiveLinkedService,
  "LinkedService.Hubspot": HubspotLinkedService,
  "LinkedService.Impala": ImpalaLinkedService,
  "LinkedService.Jira": JiraLinkedService,
  "LinkedService.Magento": MagentoLinkedService,
  "LinkedService.MariaDB": MariaDBLinkedService,
  "LinkedService.AzureMariaDB": AzureMariaDBLinkedService,
  "LinkedService.Marketo": MarketoLinkedService,
  "LinkedService.Paypal": PaypalLinkedService,
  "LinkedService.Phoenix": PhoenixLinkedService,
  "LinkedService.Presto": PrestoLinkedService,
  "LinkedService.QuickBooks": QuickBooksLinkedService,
  "LinkedService.ServiceNow": ServiceNowLinkedService,
  "LinkedService.Shopify": ShopifyLinkedService,
  "LinkedService.Spark": SparkLinkedService,
  "LinkedService.Square": SquareLinkedService,
  "LinkedService.Xero": XeroLinkedService,
  "LinkedService.Zoho": ZohoLinkedService,
  "LinkedService.Vertica": VerticaLinkedService,
  "LinkedService.Netezza": NetezzaLinkedService,
  "LinkedService.SalesforceMarketingCloud": SalesforceMarketingCloudLinkedService,
  "LinkedService.HDInsightOnDemand": HDInsightOnDemandLinkedService,
  "LinkedService.AzureDataLakeAnalytics": AzureDataLakeAnalyticsLinkedService,
  "LinkedService.AzureDatabricks": AzureDatabricksLinkedService,
  "LinkedService.Responsys": ResponsysLinkedService,
  "LinkedService.DynamicsAX": DynamicsAXLinkedService,
  "LinkedService.OracleServiceCloud": OracleServiceCloudLinkedService,
  "LinkedService.GoogleAdWords": GoogleAdWordsLinkedService,
  "LinkedService.SapTable": SapTableLinkedService,
  "LinkedService.AzureDataExplorer": AzureDataExplorerLinkedService,
  "LinkedService.AzureFunction": AzureFunctionLinkedService,
  "Dataset.Avro": AvroDataset,
  "Dataset.Parquet": ParquetDataset,
  "Dataset.DelimitedText": DelimitedTextDataset,
  "Dataset.Json": JsonDataset,
  "Dataset.Orc": OrcDataset,
  "Dataset.Binary": BinaryDataset,
  "Dataset.AzureTable": AzureTableDataset,
  "Dataset.AzureSqlTable": AzureSqlTableDataset,
  "Dataset.AzureSqlMITable": AzureSqlMITableDataset,
  "Dataset.AzureSqlDWTable": AzureSqlDWTableDataset,
  "Dataset.CassandraTable": CassandraTableDataset,
  "Dataset.CustomDataset": CustomDataset,
  "Dataset.CosmosDbSqlApiCollection": CosmosDbSqlApiCollectionDataset,
  "Dataset.DocumentDbCollection": DocumentDbCollectionDataset,
  "Dataset.DynamicsEntity": DynamicsEntityDataset,
  "Dataset.DynamicsCrmEntity": DynamicsCrmEntityDataset,
  "Dataset.CommonDataServiceForAppsEntity": CommonDataServiceForAppsEntityDataset,
  "Dataset.Office365Table": Office365Dataset,
  "Dataset.MongoDbCollection": MongoDbCollectionDataset,
  "Dataset.MongoDbV2Collection": MongoDbV2CollectionDataset,
  "Dataset.CosmosDbMongoDbApiCollection": CosmosDbMongoDbApiCollectionDataset,
  "Dataset.ODataResource": ODataResourceDataset,
  "Dataset.OracleTable": OracleTableDataset,
  "Dataset.TeradataTable": TeradataTableDataset,
  "Dataset.AzureMySqlTable": AzureMySqlTableDataset,
  "Dataset.AmazonRedshiftTable": AmazonRedshiftTableDataset,
  "Dataset.Db2Table": Db2TableDataset,
  "Dataset.RelationalTable": RelationalTableDataset,
  "Dataset.InformixTable": InformixTableDataset,
  "Dataset.OdbcTable": OdbcTableDataset,
  "Dataset.MySqlTable": MySqlTableDataset,
  "Dataset.PostgreSqlTable": PostgreSqlTableDataset,
  "Dataset.MicrosoftAccessTable": MicrosoftAccessTableDataset,
  "Dataset.SalesforceObject": SalesforceObjectDataset,
  "Dataset.SalesforceServiceCloudObject": SalesforceServiceCloudObjectDataset,
  "Dataset.SybaseTable": SybaseTableDataset,
  "Dataset.SapBwCube": SapBwCubeDataset,
  "Dataset.SapCloudForCustomerResource": SapCloudForCustomerResourceDataset,
  "Dataset.SapEccResource": SapEccResourceDataset,
  "Dataset.SapHanaTable": SapHanaTableDataset,
  "Dataset.SapOpenHubTable": SapOpenHubTableDataset,
  "Dataset.SqlServerTable": SqlServerTableDataset,
  "Dataset.RestResource": RestResourceDataset,
  "Dataset.SapTableResource": SapTableResourceDataset,
  "Dataset.WebTable": WebTableDataset,
  "Dataset.AzureSearchIndex": AzureSearchIndexDataset,
  "Dataset.AmazonMWSObject": AmazonMWSObjectDataset,
  "Dataset.AzurePostgreSqlTable": AzurePostgreSqlTableDataset,
  "Dataset.ConcurObject": ConcurObjectDataset,
  "Dataset.CouchbaseTable": CouchbaseTableDataset,
  "Dataset.DrillTable": DrillTableDataset,
  "Dataset.EloquaObject": EloquaObjectDataset,
  "Dataset.GoogleBigQueryObject": GoogleBigQueryObjectDataset,
  "Dataset.GreenplumTable": GreenplumTableDataset,
  "Dataset.HBaseObject": HBaseObjectDataset,
  "Dataset.HiveObject": HiveObjectDataset,
  "Dataset.HubspotObject": HubspotObjectDataset,
  "Dataset.ImpalaObject": ImpalaObjectDataset,
  "Dataset.JiraObject": JiraObjectDataset,
  "Dataset.MagentoObject": MagentoObjectDataset,
  "Dataset.MariaDBTable": MariaDBTableDataset,
  "Dataset.AzureMariaDBTable": AzureMariaDBTableDataset,
  "Dataset.MarketoObject": MarketoObjectDataset,
  "Dataset.PaypalObject": PaypalObjectDataset,
  "Dataset.PhoenixObject": PhoenixObjectDataset,
  "Dataset.PrestoObject": PrestoObjectDataset,
  "Dataset.QuickBooksObject": QuickBooksObjectDataset,
  "Dataset.ServiceNowObject": ServiceNowObjectDataset,
  "Dataset.ShopifyObject": ShopifyObjectDataset,
  "Dataset.SparkObject": SparkObjectDataset,
  "Dataset.SquareObject": SquareObjectDataset,
  "Dataset.XeroObject": XeroObjectDataset,
  "Dataset.ZohoObject": ZohoObjectDataset,
  "Dataset.NetezzaTable": NetezzaTableDataset,
  "Dataset.VerticaTable": VerticaTableDataset,
  "Dataset.SalesforceMarketingCloudObject": SalesforceMarketingCloudObjectDataset,
  "Dataset.ResponsysObject": ResponsysObjectDataset,
  "Dataset.DynamicsAXResource": DynamicsAXResourceDataset,
  "Dataset.OracleServiceCloudObject": OracleServiceCloudObjectDataset,
  "Dataset.AzureDataExplorerTable": AzureDataExplorerTableDataset,
  "Dataset.GoogleAdWordsObject": GoogleAdWordsObjectDataset,
  "Activity.Container": ControlActivity,
  "Activity.Execution": ExecutionActivity,
  "Activity.SqlPoolStoredProcedure": SqlPoolStoredProcedureActivity,
  "Trigger.RerunTumblingWindowTrigger": RerunTumblingWindowTrigger,
  "Trigger.MultiplePipelineTrigger": MultiplePipelineTrigger,
  "Trigger.TumblingWindowTrigger": TumblingWindowTrigger,
  "Trigger.ChainingTrigger": ChainingTrigger,
  "DataFlow.MappingDataFlow": MappingDataFlow,
  "IntegrationRuntime.Managed": ManagedIntegrationRuntime,
  "IntegrationRuntime.SelfHosted": SelfHostedIntegrationRuntime,
  "SecretBase.SecureString": SecureString,
  "SecretBase.AzureKeyVaultSecret": AzureKeyVaultSecretReference,
  "DatasetLocation.AzureBlobStorageLocation": AzureBlobStorageLocation,
  "DatasetLocation.AzureBlobFSLocation": AzureBlobFSLocation,
  "DatasetLocation.AzureDataLakeStoreLocation": AzureDataLakeStoreLocation,
  "DatasetLocation.AmazonS3Location": AmazonS3Location,
  "DatasetLocation.FileServerLocation": FileServerLocation,
  "DatasetLocation.AzureFileStorageLocation": AzureFileStorageLocation,
  "DatasetLocation.GoogleCloudStorageLocation": GoogleCloudStorageLocation,
  "DatasetLocation.FtpServerLocation": FtpServerLocation,
  "DatasetLocation.SftpLocation": SftpLocation,
  "DatasetLocation.HttpServerLocation": HttpServerLocation,
  "DatasetLocation.HdfsLocation": HdfsLocation,
  "DatasetStorageFormat.TextFormat": TextFormat,
  "DatasetStorageFormat.JsonFormat": JsonFormat,
  "DatasetStorageFormat.AvroFormat": AvroFormat,
  "DatasetStorageFormat.OrcFormat": OrcFormat,
  "DatasetStorageFormat.ParquetFormat": ParquetFormat,
  "DatasetCompression.BZip2": DatasetBZip2Compression,
  "DatasetCompression.GZip": DatasetGZipCompression,
  "DatasetCompression.Deflate": DatasetDeflateCompression,
  "DatasetCompression.ZipDeflate": DatasetZipDeflateCompression,
  "WebLinkedServiceTypeProperties.Anonymous": WebAnonymousAuthentication,
  "WebLinkedServiceTypeProperties.Basic": WebBasicAuthentication,
  "WebLinkedServiceTypeProperties.ClientCertificate": WebClientCertificateAuthentication,
  "StoreReadSettings.AzureBlobStorageReadSettings": AzureBlobStorageReadSettings,
  "StoreReadSettings.AzureBlobFSReadSettings": AzureBlobFSReadSettings,
  "StoreReadSettings.AzureDataLakeStoreReadSettings": AzureDataLakeStoreReadSettings,
  "StoreReadSettings.AmazonS3ReadSettings": AmazonS3ReadSettings,
  "StoreReadSettings.FileServerReadSettings": FileServerReadSettings,
  "StoreReadSettings.AzureFileStorageReadSettings": AzureFileStorageReadSettings,
  "StoreReadSettings.GoogleCloudStorageReadSettings": GoogleCloudStorageReadSettings,
  "StoreReadSettings.FtpReadSettings": FtpReadSettings,
  "StoreReadSettings.SftpReadSettings": SftpReadSettings,
  "StoreReadSettings.HttpReadSettings": HttpReadSettings,
  "StoreReadSettings.HdfsReadSettings": HdfsReadSettings,
  "StoreWriteSettings.SftpWriteSettings": SftpWriteSettings,
  "StoreWriteSettings.AzureBlobStorageWriteSettings": AzureBlobStorageWriteSettings,
  "StoreWriteSettings.AzureBlobFSWriteSettings": AzureBlobFSWriteSettings,
  "StoreWriteSettings.AzureDataLakeStoreWriteSettings": AzureDataLakeStoreWriteSettings,
  "StoreWriteSettings.FileServerWriteSettings": FileServerWriteSettings,
  "FormatReadSettings.DelimitedTextReadSettings": DelimitedTextReadSettings,
  "FormatWriteSettings.AvroWriteSettings": AvroWriteSettings,
  "FormatWriteSettings.DelimitedTextWriteSettings": DelimitedTextWriteSettings,
  "FormatWriteSettings.JsonWriteSettings": JsonWriteSettings,
  "CopySource.AvroSource": AvroSource,
  "CopySource.ParquetSource": ParquetSource,
  "CopySource.DelimitedTextSource": DelimitedTextSource,
  "CopySource.JsonSource": JsonSource,
  "CopySource.OrcSource": OrcSource,
  "CopySource.BinarySource": BinarySource,
  "CopySource.TabularSource": TabularSource,
  "CopySource.BlobSource": BlobSource,
  "CopySource.DocumentDbCollectionSource": DocumentDbCollectionSource,
  "CopySource.CosmosDbSqlApiSource": CosmosDbSqlApiSource,
  "CopySource.DynamicsSource": DynamicsSource,
  "CopySource.DynamicsCrmSource": DynamicsCrmSource,
  "CopySource.CommonDataServiceForAppsSource": CommonDataServiceForAppsSource,
  "CopySource.RelationalSource": RelationalSource,
  "CopySource.MicrosoftAccessSource": MicrosoftAccessSource,
  "CopySource.ODataSource": ODataSource,
  "CopySource.SalesforceServiceCloudSource": SalesforceServiceCloudSource,
  "CopySource.RestSource": RestSource,
  "CopySource.FileSystemSource": FileSystemSource,
  "CopySource.HdfsSource": HdfsSource,
  "CopySource.AzureDataExplorerSource": AzureDataExplorerSource,
  "CopySource.OracleSource": OracleSource,
  "CopySource.WebSource": WebSource,
  "CopySource.MongoDbSource": MongoDbSource,
  "CopySource.MongoDbV2Source": MongoDbV2Source,
  "CopySource.CosmosDbMongoDbApiSource": CosmosDbMongoDbApiSource,
  "CopySource.Office365Source": Office365Source,
  "CopySource.AzureDataLakeStoreSource": AzureDataLakeStoreSource,
  "CopySource.AzureBlobFSSource": AzureBlobFSSource,
  "CopySource.HttpSource": HttpSource,
  "CopySink.DelimitedTextSink": DelimitedTextSink,
  "CopySink.JsonSink": JsonSink,
  "CopySink.OrcSink": OrcSink,
  "CopySink.AzurePostgreSqlSink": AzurePostgreSqlSink,
  "CopySink.AzureMySqlSink": AzureMySqlSink,
  "CopySink.SapCloudForCustomerSink": SapCloudForCustomerSink,
  "CopySink.AzureQueueSink": AzureQueueSink,
  "CopySink.AzureTableSink": AzureTableSink,
  "CopySink.AvroSink": AvroSink,
  "CopySink.ParquetSink": ParquetSink,
  "CopySink.BinarySink": BinarySink,
  "CopySink.BlobSink": BlobSink,
  "CopySink.FileSystemSink": FileSystemSink,
  "CopySink.DocumentDbCollectionSink": DocumentDbCollectionSink,
  "CopySink.CosmosDbSqlApiSink": CosmosDbSqlApiSink,
  "CopySink.SqlSink": SqlSink,
  "CopySink.SqlServerSink": SqlServerSink,
  "CopySink.AzureSqlSink": AzureSqlSink,
  "CopySink.SqlMISink": SqlMISink,
  "CopySink.SqlDWSink": SqlDWSink,
  "CopySink.OracleSink": OracleSink,
  "CopySink.AzureDataLakeStoreSink": AzureDataLakeStoreSink,
  "CopySink.AzureBlobFSSink": AzureBlobFSSink,
  "CopySink.AzureSearchIndexSink": AzureSearchIndexSink,
  "CopySink.OdbcSink": OdbcSink,
  "CopySink.InformixSink": InformixSink,
  "CopySink.MicrosoftAccessSink": MicrosoftAccessSink,
  "CopySink.DynamicsSink": DynamicsSink,
  "CopySink.DynamicsCrmSink": DynamicsCrmSink,
  "CopySink.CommonDataServiceForAppsSink": CommonDataServiceForAppsSink,
  "CopySink.AzureDataExplorerSink": AzureDataExplorerSink,
  "CopySink.SalesforceSink": SalesforceSink,
  "CopySink.SalesforceServiceCloudSink": SalesforceServiceCloudSink,
  "CopySink.CosmosDbMongoDbApiSink": CosmosDbMongoDbApiSink,
  "CopyTranslator.TabularTranslator": TabularTranslator,
  "DependencyReference.TriggerDependencyReference": TriggerDependencyReference,
  "DependencyReference.SelfDependencyTumblingWindowTriggerReference": SelfDependencyTumblingWindowTriggerReference,
  "LinkedIntegrationRuntimeType.Key": LinkedIntegrationRuntimeKeyAuthorization,
  "LinkedIntegrationRuntimeType.RBAC": LinkedIntegrationRuntimeRbacAuthorization,
  "Activity.ExecutePipeline": ExecutePipelineActivity,
  "Activity.IfCondition": IfConditionActivity,
  "Activity.Switch": SwitchActivity,
  "Activity.ForEach": ForEachActivity,
  "Activity.Wait": WaitActivity,
  "Activity.Until": UntilActivity,
  "Activity.Validation": ValidationActivity,
  "Activity.Filter": FilterActivity,
  "Activity.SetVariable": SetVariableActivity,
  "Activity.AppendVariable": AppendVariableActivity,
  "Activity.WebHook": WebHookActivity,
  "Activity.Copy": CopyActivity,
  "Activity.HDInsightHive": HDInsightHiveActivity,
  "Activity.HDInsightPig": HDInsightPigActivity,
  "Activity.HDInsightMapReduce": HDInsightMapReduceActivity,
  "Activity.HDInsightStreaming": HDInsightStreamingActivity,
  "Activity.HDInsightSpark": HDInsightSparkActivity,
  "Activity.ExecuteSSISPackage": ExecuteSsisPackageActivity,
  "Activity.Custom": CustomActivity,
  "Activity.SqlServerStoredProcedure": SqlServerStoredProcedureActivity,
  "Activity.Delete": DeleteActivity,
  "Activity.AzureDataExplorerCommand": AzureDataExplorerCommandActivity,
  "Activity.Lookup": LookupActivity,
  "Activity.WebActivity": WebActivity,
  "Activity.GetMetadata": GetMetadataActivity,
  "Activity.AzureMLBatchExecution": AzureMLBatchExecutionActivity,
  "Activity.AzureMLUpdateResource": AzureMLUpdateResourceActivity,
  "Activity.AzureMLExecutePipeline": AzureMLExecutePipelineActivity,
  "Activity.DataLakeAnalyticsU-SQL": DataLakeAnalyticsUsqlActivity,
  "Activity.DatabricksNotebook": DatabricksNotebookActivity,
  "Activity.DatabricksSparkJar": DatabricksSparkJarActivity,
  "Activity.DatabricksSparkPython": DatabricksSparkPythonActivity,
  "Activity.AzureFunctionActivity": AzureFunctionActivity,
  "Activity.ExecuteDataFlow": ExecuteDataFlowActivity,
  "Activity.SynapseNotebook": SynapseNotebookActivity,
  "Activity.SparkJob": SynapseSparkJobDefinitionActivity,
  "Trigger.ScheduleTrigger": ScheduleTrigger,
  "Trigger.BlobTrigger": BlobTrigger,
  "Trigger.BlobEventsTrigger": BlobEventsTrigger,
  "CopySource.AzureTableSource": AzureTableSource,
  "CopySource.InformixSource": InformixSource,
  "CopySource.Db2Source": Db2Source,
  "CopySource.OdbcSource": OdbcSource,
  "CopySource.MySqlSource": MySqlSource,
  "CopySource.PostgreSqlSource": PostgreSqlSource,
  "CopySource.SybaseSource": SybaseSource,
  "CopySource.SapBwSource": SapBwSource,
  "CopySource.SalesforceSource": SalesforceSource,
  "CopySource.SapCloudForCustomerSource": SapCloudForCustomerSource,
  "CopySource.SapEccSource": SapEccSource,
  "CopySource.SapHanaSource": SapHanaSource,
  "CopySource.SapOpenHubSource": SapOpenHubSource,
  "CopySource.SapTableSource": SapTableSource,
  "CopySource.SqlSource": SqlSource,
  "CopySource.SqlServerSource": SqlServerSource,
  "CopySource.AzureSqlSource": AzureSqlSource,
  "CopySource.SqlMISource": SqlMISource,
  "CopySource.SqlDWSource": SqlDWSource,
  "CopySource.AzureMySqlSource": AzureMySqlSource,
  "CopySource.TeradataSource": TeradataSource,
  "CopySource.CassandraSource": CassandraSource,
  "CopySource.AmazonMWSSource": AmazonMWSSource,
  "CopySource.AzurePostgreSqlSource": AzurePostgreSqlSource,
  "CopySource.ConcurSource": ConcurSource,
  "CopySource.CouchbaseSource": CouchbaseSource,
  "CopySource.DrillSource": DrillSource,
  "CopySource.EloquaSource": EloquaSource,
  "CopySource.GoogleBigQuerySource": GoogleBigQuerySource,
  "CopySource.GreenplumSource": GreenplumSource,
  "CopySource.HBaseSource": HBaseSource,
  "CopySource.HiveSource": HiveSource,
  "CopySource.HubspotSource": HubspotSource,
  "CopySource.ImpalaSource": ImpalaSource,
  "CopySource.JiraSource": JiraSource,
  "CopySource.MagentoSource": MagentoSource,
  "CopySource.MariaDBSource": MariaDBSource,
  "CopySource.AzureMariaDBSource": AzureMariaDBSource,
  "CopySource.MarketoSource": MarketoSource,
  "CopySource.PaypalSource": PaypalSource,
  "CopySource.PhoenixSource": PhoenixSource,
  "CopySource.PrestoSource": PrestoSource,
  "CopySource.QuickBooksSource": QuickBooksSource,
  "CopySource.ServiceNowSource": ServiceNowSource,
  "CopySource.ShopifySource": ShopifySource,
  "CopySource.SparkSource": SparkSource,
  "CopySource.SquareSource": SquareSource,
  "CopySource.XeroSource": XeroSource,
  "CopySource.ZohoSource": ZohoSource,
  "CopySource.NetezzaSource": NetezzaSource,
  "CopySource.VerticaSource": VerticaSource,
  "CopySource.SalesforceMarketingCloudSource": SalesforceMarketingCloudSource,
  "CopySource.ResponsysSource": ResponsysSource,
  "CopySource.DynamicsAXSource": DynamicsAXSource,
  "CopySource.OracleServiceCloudSource": OracleServiceCloudSource,
  "CopySource.GoogleAdWordsSource": GoogleAdWordsSource,
  "CopySource.AmazonRedshiftSource": AmazonRedshiftSource,
  "DependencyReference.TumblingWindowTriggerDependencyReference": TumblingWindowTriggerDependencyReference
};
