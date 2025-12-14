import _ from 'lodash';

export const handler = async () => ({
  statusCode: 200,
  body: JSON.stringify({ message: "Lambda invoked successfully", lodashVersion: _.VERSION })
});