interface SubmitFeedbackUseCaseRequest {
  name: string;
  username?: string;
}

export class SubmitFeedbackUseCase {
  async execute(request: SubmitFeedbackUseCaseRequest) {}
}
