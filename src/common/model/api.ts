export interface IApi {
    id: string,
    module: string,
    function: string,
    parameters: string[],
    parameters_types: string[],
    returns: string[],
    returns_types: string[],
    method: string,
    example_url: string|null,
    example: string|null,
    auth: boolean
}

export class Api implements IApi {
    auth: boolean = false;
    example: string | null = null;
    example_url: string | null = null;
    function: string = '';
    id: string = '';
    method: string = '';
    module: string = '';
    parameters: string[] = [];
    parameters_types: string[] = [];
    returns: string[] = [];
    returns_types: string[] = [];
}
