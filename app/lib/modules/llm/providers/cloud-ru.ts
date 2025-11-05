import OpenAILikeProvider from './openai-like';

export default class CloudRuProvider extends OpenAILikeProvider {
  name = 'Cloud.ru';

  config = {
    baseUrlKey: 'CLOUD_RU_API_BASE_URL',
    apiTokenKey: 'CLOUD_RU_API_KEY',
    modelsKey: 'CLOUD_RU_API_MODELS',
  };

  getApiKeyLink = 'https://cloud.ru/ru/docs/ai-cloud/ml-space/concepts/abc/authentication';
}
