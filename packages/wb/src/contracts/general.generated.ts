// Generated runtime schemas for this Wildberries API domain.
import type { WbSchemaComponents } from "../schema.js";

export const generalComponents: WbSchemaComponents = {
  Access: {
    kind: "array",
    items: {
      kind: "object",
      properties: {
        code: {
          kind: "string",
          enum: [
            "balance",
            "brands",
            "changeJam",
            "discountPrice",
            "finance",
            "showcase",
            "suppliersDocuments",
            "supply",
            "questions",
            "pinFeedbacks",
            "pointsForReviews",
            "feedbacks",
            "oldAnalyticsReports",
            "marketplace",
            "brandsFlow",
            "copyrightComplaints",
            "pretrialClaims",
            "sellersChat",
            "brandzone",
            "brandzoneSubscribe",
          ],
        },
        disabled: { kind: "boolean" },
      },
      required: ["code", "disabled"],
    },
  },
  getUsersResponse: {
    kind: "object",
    properties: {
      total: { kind: "number", integer: true },
      countInResponse: { kind: "number", integer: true },
      users: {
        kind: "array",
        items: {
          kind: "object",
          properties: {
            id: { kind: "number", integer: true },
            role: { kind: "string", enum: ["user", ""] },
            position: { kind: "string" },
            phone: { kind: "string" },
            email: { kind: "string" },
            isOwner: { kind: "boolean" },
            firstName: { kind: "string" },
            secondName: { kind: "string" },
            patronymic: { kind: "string" },
            goodsReturn: { kind: "boolean" },
            isInvitee: { kind: "boolean" },
            inviteeInfo: {
              kind: "object",
              properties: {
                phoneNumber: { kind: "string" },
                position: { kind: "string" },
                inviteUuid: { kind: "string" },
                expiredAt: { kind: "string" },
                isActive: { kind: "boolean" },
              },
              required: [],
              nullable: true,
            },
            access: { kind: "ref", name: "Access" },
          },
          required: [
            "id",
            "role",
            "position",
            "phone",
            "email",
            "isOwner",
            "firstName",
            "secondName",
            "patronymic",
            "goodsReturn",
            "isInvitee",
            "inviteeInfo",
            "access",
          ],
        },
      },
    },
    required: ["users", "total", "countInResponse"],
  },
  createInviteRequest: {
    kind: "object",
    properties: {
      access: { kind: "ref", name: "Access" },
      invite: {
        kind: "object",
        properties: {
          phoneNumber: { kind: "string" },
          position: { kind: "string", maxLength: 150 },
        },
        required: ["phoneNumber"],
      },
    },
    required: ["invite"],
  },
  createInviteResponse: {
    kind: "object",
    properties: {
      inviteID: { kind: "string" },
      expiredAt: { kind: "string" },
      isSuccess: { kind: "boolean" },
      inviteUrl: { kind: "string" },
    },
    required: ["inviteID", "expiredAt", "isSuccess", "inviteUrl"],
  },
  updateUserAccessRequest: {
    kind: "object",
    properties: {
      usersAccesses: {
        kind: "array",
        items: { kind: "ref", name: "UserAccess" },
      },
    },
    required: ["usersAccesses"],
  },
  UserAccess: {
    kind: "object",
    properties: {
      userId: { kind: "number", integer: true },
      access: { kind: "ref", name: "Access" },
    },
    required: [],
  },
  errorResponse: {
    kind: "object",
    properties: {
      title: { kind: "string" },
      detail: { kind: "string" },
      requestId: { kind: "string" },
      origin: { kind: "string" },
      status: { kind: "number" },
    },
    required: ["title", "detail", "requestId", "origin", "status"],
  },
  SupplierRatingModel: {
    kind: "object",
    properties: {
      feedbackCount: { kind: "number", integer: true },
      valuation: { kind: "number" },
    },
    required: [],
  },
  SubscriptionsJamInfo: {
    kind: "object",
    properties: {
      state: { kind: "string", enum: ["active", "inactive"] },
      activationSource: { kind: "string", enum: ["constructor", "jam"] },
      level: { kind: "string", enum: ["standard", "advanced", "premium"] },
      since: { kind: "string" },
      till: { kind: "string" },
    },
    required: ["state", "activationSource", "level", "since", "till"],
  },
  PlanBuilderOptionsInfo: {
    kind: "object",
    properties: {
      activeOptionCount: { kind: "number" },
      activePackageCount: { kind: "number" },
      totalCommissionRate: { kind: "number" },
      packages: {
        kind: "array",
        items: { kind: "ref", name: "PlanBuilderPackage" },
      },
      options: {
        kind: "array",
        items: { kind: "ref", name: "PlanBuilderOption" },
      },
    },
    required: [
      "activeOptionCount",
      "activePackageCount",
      "totalCommissionRate",
      "packages",
      "options",
    ],
  },
  PlanBuilderPackage: {
    kind: "object",
    properties: {
      id: { kind: "string" },
      slug: { kind: "string" },
      name: { kind: "string" },
      status: {
        kind: "string",
        enum: ["active", "pendingActivation", "pendingDeactivation"],
      },
      activatedAt: { kind: "string" },
      expiresAt: { kind: "string" },
      commissionRate: { kind: "number" },
      periodDuration: { kind: "number" },
      options: {
        kind: "array",
        items: { kind: "ref", name: "PlanBuilderOptionShort" },
      },
    },
    required: [],
  },
  PlanBuilderOption: {
    kind: "object",
    properties: {
      id: { kind: "string" },
      slug: { kind: "string" },
      name: { kind: "string" },
      status: {
        kind: "string",
        enum: ["active", "pendingActivation", "pendingDeactivation"],
      },
      activatedAt: { kind: "string" },
      expiresAt: { kind: "string" },
      commissionRate: { kind: "number" },
      periodDuration: { kind: "number" },
      promotion: {
        kind: "object",
        properties: {
          commissionRate: { kind: "number" },
          expiresAt: { kind: "string" },
        },
        required: [],
      },
    },
    required: [],
  },
  PlanBuilderOptionShort: {
    kind: "object",
    properties: {
      id: { kind: "string" },
      slug: { kind: "string" },
      name: { kind: "string" },
    },
    required: [],
  },
  PlanBuilderPromotion: {
    kind: "object",
    properties: {
      commissionRate: { kind: "number" },
      expiresAt: { kind: "string" },
    },
    required: [],
  },
  PlanBuilderErrors: {
    kind: "object",
    properties: {
      title: { kind: "string" },
      detail: { kind: "string" },
      code: { kind: "string" },
      requestId: { kind: "string" },
      origin: { kind: "string" },
      status: { kind: "number" },
      errors: { kind: "array", items: { kind: "unknown" } },
    },
    required: [],
  },
};
