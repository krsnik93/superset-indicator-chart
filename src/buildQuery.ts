import { buildQueryContext, QueryFormData } from '@superset-ui/core';

export default function buildQuery(formData: QueryFormData) {
  return buildQueryContext(formData, baseQueryObject => [
    {
      ...baseQueryObject,
      orderby: formData.metrics.map(metric => [metric, formData.order_desc]),
    },
  ]);
}
