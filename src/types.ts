export interface Choice {
  text: string,
  value: string
};

export interface Buttons {
  name: string,
  choices: Array<Choice>
};

export interface Directive {
  type: string,
  title?: string,
  options?: any
};

export interface OrbitaResponse {
  text: string,
  buttons?: Buttons,
  directives?: Array<Directive>
}