export async function getRecaptchaToken(action: string): Promise<string> {
  return new Promise<string>((resolve) => {
    window.grecaptcha.enterprise.ready(async () => {
      const result = await window.grecaptcha.enterprise.execute('6Lc-VjQqAAAAAAf_9RhQ6xiDJyl6vpQz1vtC7CUB', { action });
      resolve(result);
    });
  });
}
