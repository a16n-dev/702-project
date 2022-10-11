declare namespace Components {
    namespace Responses {
        export type ParseError = /* Schema which represents the JSON returned for errors and other conditions which expect status updates. */ Schemas.Error;
    }
    namespace Schemas {
        /**
         * Schema which represents the JSON returned for errors and other conditions which expect status updates.
         */
        export interface Error {
            /**
             * The status message.
             * example:
             * Invalid request.
             */
            message: string;
        }
    }
}
declare namespace Paths {
    namespace CreateReflection {
        export interface RequestBody {
            answers: string[];
            levelData: {
                [key: string]: any;
            };
            userCode: string;
        }
        namespace Responses {
            export interface $201 {
            }
            export type $400 = Components.Responses.ParseError;
        }
    }
    namespace GetReflections {
        namespace Responses {
            export interface $200 {
                answers: string[][];
            }
        }
    }
    namespace _ {
        namespace Get {
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
}
