
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model CareTaker
 * 
 */
export type CareTaker = $Result.DefaultSelection<Prisma.$CareTakerPayload>
/**
 * Model Hostel
 * 
 */
export type Hostel = $Result.DefaultSelection<Prisma.$HostelPayload>
/**
 * Model Room
 * 
 */
export type Room = $Result.DefaultSelection<Prisma.$RoomPayload>
/**
 * Model Outpass
 * 
 */
export type Outpass = $Result.DefaultSelection<Prisma.$OutpassPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AttendanceType: {
  INCAMPUS: 'INCAMPUS',
  OUTING: 'OUTING',
  LEAVE: 'LEAVE'
};

export type AttendanceType = (typeof AttendanceType)[keyof typeof AttendanceType]


export const ROLE: {
  STUDENT: 'STUDENT',
  CARETAKER: 'CARETAKER',
  ADMIN: 'ADMIN'
};

export type ROLE = (typeof ROLE)[keyof typeof ROLE]


export const OUTPASS_STATUS: {
  PENDING: 'PENDING',
  REJECTED: 'REJECTED',
  APPROVED: 'APPROVED'
};

export type OUTPASS_STATUS = (typeof OUTPASS_STATUS)[keyof typeof OUTPASS_STATUS]


export const OUTPASS_TYPE: {
  OUTING: 'OUTING',
  LEAVE: 'LEAVE'
};

export type OUTPASS_TYPE = (typeof OUTPASS_TYPE)[keyof typeof OUTPASS_TYPE]

}

export type AttendanceType = $Enums.AttendanceType

export const AttendanceType: typeof $Enums.AttendanceType

export type ROLE = $Enums.ROLE

export const ROLE: typeof $Enums.ROLE

export type OUTPASS_STATUS = $Enums.OUTPASS_STATUS

export const OUTPASS_STATUS: typeof $Enums.OUTPASS_STATUS

export type OUTPASS_TYPE = $Enums.OUTPASS_TYPE

export const OUTPASS_TYPE: typeof $Enums.OUTPASS_TYPE

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.careTaker`: Exposes CRUD operations for the **CareTaker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CareTakers
    * const careTakers = await prisma.careTaker.findMany()
    * ```
    */
  get careTaker(): Prisma.CareTakerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hostel`: Exposes CRUD operations for the **Hostel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hostels
    * const hostels = await prisma.hostel.findMany()
    * ```
    */
  get hostel(): Prisma.HostelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.room`: Exposes CRUD operations for the **Room** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rooms
    * const rooms = await prisma.room.findMany()
    * ```
    */
  get room(): Prisma.RoomDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outpass`: Exposes CRUD operations for the **Outpass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outpasses
    * const outpasses = await prisma.outpass.findMany()
    * ```
    */
  get outpass(): Prisma.OutpassDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Student: 'Student',
    Attendance: 'Attendance',
    CareTaker: 'CareTaker',
    Hostel: 'Hostel',
    Room: 'Room',
    Outpass: 'Outpass'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "student" | "attendance" | "careTaker" | "hostel" | "room" | "outpass"
      txIsolationLevel: never
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.StudentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.StudentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AttendanceFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AttendanceAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      CareTaker: {
        payload: Prisma.$CareTakerPayload<ExtArgs>
        fields: Prisma.CareTakerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CareTakerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareTakerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CareTakerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareTakerPayload>
          }
          findFirst: {
            args: Prisma.CareTakerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareTakerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CareTakerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareTakerPayload>
          }
          findMany: {
            args: Prisma.CareTakerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareTakerPayload>[]
          }
          create: {
            args: Prisma.CareTakerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareTakerPayload>
          }
          createMany: {
            args: Prisma.CareTakerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CareTakerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareTakerPayload>
          }
          update: {
            args: Prisma.CareTakerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareTakerPayload>
          }
          deleteMany: {
            args: Prisma.CareTakerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CareTakerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CareTakerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CareTakerPayload>
          }
          aggregate: {
            args: Prisma.CareTakerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCareTaker>
          }
          groupBy: {
            args: Prisma.CareTakerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CareTakerGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CareTakerFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CareTakerAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CareTakerCountArgs<ExtArgs>
            result: $Utils.Optional<CareTakerCountAggregateOutputType> | number
          }
        }
      }
      Hostel: {
        payload: Prisma.$HostelPayload<ExtArgs>
        fields: Prisma.HostelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HostelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HostelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostelPayload>
          }
          findFirst: {
            args: Prisma.HostelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HostelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostelPayload>
          }
          findMany: {
            args: Prisma.HostelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostelPayload>[]
          }
          create: {
            args: Prisma.HostelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostelPayload>
          }
          createMany: {
            args: Prisma.HostelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HostelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostelPayload>
          }
          update: {
            args: Prisma.HostelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostelPayload>
          }
          deleteMany: {
            args: Prisma.HostelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HostelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HostelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HostelPayload>
          }
          aggregate: {
            args: Prisma.HostelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHostel>
          }
          groupBy: {
            args: Prisma.HostelGroupByArgs<ExtArgs>
            result: $Utils.Optional<HostelGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HostelFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HostelAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HostelCountArgs<ExtArgs>
            result: $Utils.Optional<HostelCountAggregateOutputType> | number
          }
        }
      }
      Room: {
        payload: Prisma.$RoomPayload<ExtArgs>
        fields: Prisma.RoomFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoomFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoomFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findFirst: {
            args: Prisma.RoomFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoomFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          findMany: {
            args: Prisma.RoomFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>[]
          }
          create: {
            args: Prisma.RoomCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          createMany: {
            args: Prisma.RoomCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoomDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          update: {
            args: Prisma.RoomUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          deleteMany: {
            args: Prisma.RoomDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoomUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoomUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoomPayload>
          }
          aggregate: {
            args: Prisma.RoomAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoom>
          }
          groupBy: {
            args: Prisma.RoomGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoomGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.RoomFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.RoomAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.RoomCountArgs<ExtArgs>
            result: $Utils.Optional<RoomCountAggregateOutputType> | number
          }
        }
      }
      Outpass: {
        payload: Prisma.$OutpassPayload<ExtArgs>
        fields: Prisma.OutpassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutpassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutpassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          findFirst: {
            args: Prisma.OutpassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutpassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          findMany: {
            args: Prisma.OutpassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>[]
          }
          create: {
            args: Prisma.OutpassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          createMany: {
            args: Prisma.OutpassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OutpassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          update: {
            args: Prisma.OutpassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          deleteMany: {
            args: Prisma.OutpassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutpassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutpassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutpassPayload>
          }
          aggregate: {
            args: Prisma.OutpassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutpass>
          }
          groupBy: {
            args: Prisma.OutpassGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutpassGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OutpassFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OutpassAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OutpassCountArgs<ExtArgs>
            result: $Utils.Optional<OutpassCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    student?: StudentOmit
    attendance?: AttendanceOmit
    careTaker?: CareTakerOmit
    hostel?: HostelOmit
    room?: RoomOmit
    outpass?: OutpassOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    attendanceRecords: number
    outpasses: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendanceRecords?: boolean | StudentCountOutputTypeCountAttendanceRecordsArgs
    outpasses?: boolean | StudentCountOutputTypeCountOutpassesArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAttendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountOutpassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutpassWhereInput
  }


  /**
   * Count Type CareTakerCountOutputType
   */

  export type CareTakerCountOutputType = {
    outpasses: number
  }

  export type CareTakerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outpasses?: boolean | CareTakerCountOutputTypeCountOutpassesArgs
  }

  // Custom InputTypes
  /**
   * CareTakerCountOutputType without action
   */
  export type CareTakerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTakerCountOutputType
     */
    select?: CareTakerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CareTakerCountOutputType without action
   */
  export type CareTakerCountOutputTypeCountOutpassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutpassWhereInput
  }


  /**
   * Count Type HostelCountOutputType
   */

  export type HostelCountOutputType = {
    rooms: number
    caretakers: number
  }

  export type HostelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | HostelCountOutputTypeCountRoomsArgs
    caretakers?: boolean | HostelCountOutputTypeCountCaretakersArgs
  }

  // Custom InputTypes
  /**
   * HostelCountOutputType without action
   */
  export type HostelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HostelCountOutputType
     */
    select?: HostelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HostelCountOutputType without action
   */
  export type HostelCountOutputTypeCountRoomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
  }

  /**
   * HostelCountOutputType without action
   */
  export type HostelCountOutputTypeCountCaretakersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareTakerWhereInput
  }


  /**
   * Count Type RoomCountOutputType
   */

  export type RoomCountOutputType = {
    students: number
  }

  export type RoomCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | RoomCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoomCountOutputType
     */
    select?: RoomCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoomCountOutputType without action
   */
  export type RoomCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    criticalPoints: number | null
  }

  export type StudentSumAggregateOutputType = {
    criticalPoints: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    name: string | null
    collegeId: string | null
    email: string | null
    phone: string | null
    address: string | null
    image: string | null
    password: string | null
    roomId: string | null
    criticalPoints: number | null
    out: boolean | null
    outType: $Enums.AttendanceType | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    collegeId: string | null
    email: string | null
    phone: string | null
    address: string | null
    image: string | null
    password: string | null
    roomId: string | null
    criticalPoints: number | null
    out: boolean | null
    outType: $Enums.AttendanceType | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    name: number
    collegeId: number
    email: number
    phone: number
    address: number
    image: number
    password: number
    roomId: number
    criticalPoints: number
    out: number
    outType: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    criticalPoints?: true
  }

  export type StudentSumAggregateInputType = {
    criticalPoints?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    name?: true
    collegeId?: true
    email?: true
    phone?: true
    address?: true
    image?: true
    password?: true
    roomId?: true
    criticalPoints?: true
    out?: true
    outType?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    name?: true
    collegeId?: true
    email?: true
    phone?: true
    address?: true
    image?: true
    password?: true
    roomId?: true
    criticalPoints?: true
    out?: true
    outType?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    name?: true
    collegeId?: true
    email?: true
    phone?: true
    address?: true
    image?: true
    password?: true
    roomId?: true
    criticalPoints?: true
    out?: true
    outType?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    name: string
    collegeId: string
    email: string
    phone: string | null
    address: string
    image: string
    password: string
    roomId: string
    criticalPoints: number
    out: boolean
    outType: $Enums.AttendanceType
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    collegeId?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    image?: boolean
    password?: boolean
    roomId?: boolean
    criticalPoints?: boolean
    out?: boolean
    outType?: boolean
    room?: boolean | RoomDefaultArgs<ExtArgs>
    attendanceRecords?: boolean | Student$attendanceRecordsArgs<ExtArgs>
    outpasses?: boolean | Student$outpassesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    name?: boolean
    collegeId?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    image?: boolean
    password?: boolean
    roomId?: boolean
    criticalPoints?: boolean
    out?: boolean
    outType?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "collegeId" | "email" | "phone" | "address" | "image" | "password" | "roomId" | "criticalPoints" | "out" | "outType", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    room?: boolean | RoomDefaultArgs<ExtArgs>
    attendanceRecords?: boolean | Student$attendanceRecordsArgs<ExtArgs>
    outpasses?: boolean | Student$outpassesArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      room: Prisma.$RoomPayload<ExtArgs>
      attendanceRecords: Prisma.$AttendancePayload<ExtArgs>[]
      outpasses: Prisma.$OutpassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      collegeId: string
      email: string
      phone: string | null
      address: string
      image: string
      password: string
      roomId: string
      criticalPoints: number
      out: boolean
      outType: $Enums.AttendanceType
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * @param {StudentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const student = await prisma.student.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: StudentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Student.
     * @param {StudentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const student = await prisma.student.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: StudentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    room<T extends RoomDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoomDefaultArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendanceRecords<T extends Student$attendanceRecordsArgs<ExtArgs> = {}>(args?: Subset<T, Student$attendanceRecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    outpasses<T extends Student$outpassesArgs<ExtArgs> = {}>(args?: Subset<T, Student$outpassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly collegeId: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly address: FieldRef<"Student", 'String'>
    readonly image: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly roomId: FieldRef<"Student", 'String'>
    readonly criticalPoints: FieldRef<"Student", 'Int'>
    readonly out: FieldRef<"Student", 'Boolean'>
    readonly outType: FieldRef<"Student", 'AttendanceType'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student findRaw
   */
  export type StudentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student aggregateRaw
   */
  export type StudentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Student.attendanceRecords
   */
  export type Student$attendanceRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Student.outpasses
   */
  export type Student$outpassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    where?: OutpassWhereInput
    orderBy?: OutpassOrderByWithRelationInput | OutpassOrderByWithRelationInput[]
    cursor?: OutpassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutpassScalarFieldEnum | OutpassScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    checkInAt: Date | null
    checkOutAt: Date | null
    type: $Enums.AttendanceType | null
    createdAt: Date | null
    expectedIn: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    checkInAt: Date | null
    checkOutAt: Date | null
    type: $Enums.AttendanceType | null
    createdAt: Date | null
    expectedIn: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    checkInAt: number
    checkOutAt: number
    type: number
    createdAt: number
    expectedIn: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    checkInAt?: true
    checkOutAt?: true
    type?: true
    createdAt?: true
    expectedIn?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    checkInAt?: true
    checkOutAt?: true
    type?: true
    createdAt?: true
    expectedIn?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    checkInAt?: true
    checkOutAt?: true
    type?: true
    createdAt?: true
    expectedIn?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    studentId: string
    checkInAt: Date | null
    checkOutAt: Date | null
    type: $Enums.AttendanceType
    createdAt: Date
    expectedIn: Date | null
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    type?: boolean
    createdAt?: boolean
    expectedIn?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>



  export type AttendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    checkInAt?: boolean
    checkOutAt?: boolean
    type?: boolean
    createdAt?: boolean
    expectedIn?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "checkInAt" | "checkOutAt" | "type" | "createdAt" | "expectedIn", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      checkInAt: Date | null
      checkOutAt: Date | null
      type: $Enums.AttendanceType
      createdAt: Date
      expectedIn: Date | null
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * @param {AttendanceFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const attendance = await prisma.attendance.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AttendanceFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Attendance.
     * @param {AttendanceAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const attendance = await prisma.attendance.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AttendanceAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly studentId: FieldRef<"Attendance", 'String'>
    readonly checkInAt: FieldRef<"Attendance", 'DateTime'>
    readonly checkOutAt: FieldRef<"Attendance", 'DateTime'>
    readonly type: FieldRef<"Attendance", 'AttendanceType'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
    readonly expectedIn: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance findRaw
   */
  export type AttendanceFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Attendance aggregateRaw
   */
  export type AttendanceAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model CareTaker
   */

  export type AggregateCareTaker = {
    _count: CareTakerCountAggregateOutputType | null
    _min: CareTakerMinAggregateOutputType | null
    _max: CareTakerMaxAggregateOutputType | null
  }

  export type CareTakerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    image: string | null
    hostelId: string | null
    role: $Enums.ROLE | null
    password: string | null
  }

  export type CareTakerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    image: string | null
    hostelId: string | null
    role: $Enums.ROLE | null
    password: string | null
  }

  export type CareTakerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    image: number
    hostelId: number
    role: number
    password: number
    _all: number
  }


  export type CareTakerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    image?: true
    hostelId?: true
    role?: true
    password?: true
  }

  export type CareTakerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    image?: true
    hostelId?: true
    role?: true
    password?: true
  }

  export type CareTakerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    image?: true
    hostelId?: true
    role?: true
    password?: true
    _all?: true
  }

  export type CareTakerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareTaker to aggregate.
     */
    where?: CareTakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareTakers to fetch.
     */
    orderBy?: CareTakerOrderByWithRelationInput | CareTakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CareTakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareTakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareTakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CareTakers
    **/
    _count?: true | CareTakerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CareTakerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CareTakerMaxAggregateInputType
  }

  export type GetCareTakerAggregateType<T extends CareTakerAggregateArgs> = {
        [P in keyof T & keyof AggregateCareTaker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCareTaker[P]>
      : GetScalarType<T[P], AggregateCareTaker[P]>
  }




  export type CareTakerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CareTakerWhereInput
    orderBy?: CareTakerOrderByWithAggregationInput | CareTakerOrderByWithAggregationInput[]
    by: CareTakerScalarFieldEnum[] | CareTakerScalarFieldEnum
    having?: CareTakerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CareTakerCountAggregateInputType | true
    _min?: CareTakerMinAggregateInputType
    _max?: CareTakerMaxAggregateInputType
  }

  export type CareTakerGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    image: string
    hostelId: string | null
    role: $Enums.ROLE
    password: string
    _count: CareTakerCountAggregateOutputType | null
    _min: CareTakerMinAggregateOutputType | null
    _max: CareTakerMaxAggregateOutputType | null
  }

  type GetCareTakerGroupByPayload<T extends CareTakerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CareTakerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CareTakerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CareTakerGroupByOutputType[P]>
            : GetScalarType<T[P], CareTakerGroupByOutputType[P]>
        }
      >
    >


  export type CareTakerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    hostelId?: boolean
    role?: boolean
    password?: boolean
    hostel?: boolean | CareTaker$hostelArgs<ExtArgs>
    outpasses?: boolean | CareTaker$outpassesArgs<ExtArgs>
    _count?: boolean | CareTakerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["careTaker"]>



  export type CareTakerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    image?: boolean
    hostelId?: boolean
    role?: boolean
    password?: boolean
  }

  export type CareTakerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "image" | "hostelId" | "role" | "password", ExtArgs["result"]["careTaker"]>
  export type CareTakerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostel?: boolean | CareTaker$hostelArgs<ExtArgs>
    outpasses?: boolean | CareTaker$outpassesArgs<ExtArgs>
    _count?: boolean | CareTakerCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CareTakerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CareTaker"
    objects: {
      hostel: Prisma.$HostelPayload<ExtArgs> | null
      outpasses: Prisma.$OutpassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      image: string
      hostelId: string | null
      role: $Enums.ROLE
      password: string
    }, ExtArgs["result"]["careTaker"]>
    composites: {}
  }

  type CareTakerGetPayload<S extends boolean | null | undefined | CareTakerDefaultArgs> = $Result.GetResult<Prisma.$CareTakerPayload, S>

  type CareTakerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CareTakerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CareTakerCountAggregateInputType | true
    }

  export interface CareTakerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CareTaker'], meta: { name: 'CareTaker' } }
    /**
     * Find zero or one CareTaker that matches the filter.
     * @param {CareTakerFindUniqueArgs} args - Arguments to find a CareTaker
     * @example
     * // Get one CareTaker
     * const careTaker = await prisma.careTaker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CareTakerFindUniqueArgs>(args: SelectSubset<T, CareTakerFindUniqueArgs<ExtArgs>>): Prisma__CareTakerClient<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CareTaker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CareTakerFindUniqueOrThrowArgs} args - Arguments to find a CareTaker
     * @example
     * // Get one CareTaker
     * const careTaker = await prisma.careTaker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CareTakerFindUniqueOrThrowArgs>(args: SelectSubset<T, CareTakerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CareTakerClient<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareTaker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareTakerFindFirstArgs} args - Arguments to find a CareTaker
     * @example
     * // Get one CareTaker
     * const careTaker = await prisma.careTaker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CareTakerFindFirstArgs>(args?: SelectSubset<T, CareTakerFindFirstArgs<ExtArgs>>): Prisma__CareTakerClient<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CareTaker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareTakerFindFirstOrThrowArgs} args - Arguments to find a CareTaker
     * @example
     * // Get one CareTaker
     * const careTaker = await prisma.careTaker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CareTakerFindFirstOrThrowArgs>(args?: SelectSubset<T, CareTakerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CareTakerClient<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareTakers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareTakerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CareTakers
     * const careTakers = await prisma.careTaker.findMany()
     * 
     * // Get first 10 CareTakers
     * const careTakers = await prisma.careTaker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const careTakerWithIdOnly = await prisma.careTaker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CareTakerFindManyArgs>(args?: SelectSubset<T, CareTakerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CareTaker.
     * @param {CareTakerCreateArgs} args - Arguments to create a CareTaker.
     * @example
     * // Create one CareTaker
     * const CareTaker = await prisma.careTaker.create({
     *   data: {
     *     // ... data to create a CareTaker
     *   }
     * })
     * 
     */
    create<T extends CareTakerCreateArgs>(args: SelectSubset<T, CareTakerCreateArgs<ExtArgs>>): Prisma__CareTakerClient<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CareTakers.
     * @param {CareTakerCreateManyArgs} args - Arguments to create many CareTakers.
     * @example
     * // Create many CareTakers
     * const careTaker = await prisma.careTaker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CareTakerCreateManyArgs>(args?: SelectSubset<T, CareTakerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CareTaker.
     * @param {CareTakerDeleteArgs} args - Arguments to delete one CareTaker.
     * @example
     * // Delete one CareTaker
     * const CareTaker = await prisma.careTaker.delete({
     *   where: {
     *     // ... filter to delete one CareTaker
     *   }
     * })
     * 
     */
    delete<T extends CareTakerDeleteArgs>(args: SelectSubset<T, CareTakerDeleteArgs<ExtArgs>>): Prisma__CareTakerClient<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CareTaker.
     * @param {CareTakerUpdateArgs} args - Arguments to update one CareTaker.
     * @example
     * // Update one CareTaker
     * const careTaker = await prisma.careTaker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CareTakerUpdateArgs>(args: SelectSubset<T, CareTakerUpdateArgs<ExtArgs>>): Prisma__CareTakerClient<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CareTakers.
     * @param {CareTakerDeleteManyArgs} args - Arguments to filter CareTakers to delete.
     * @example
     * // Delete a few CareTakers
     * const { count } = await prisma.careTaker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CareTakerDeleteManyArgs>(args?: SelectSubset<T, CareTakerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CareTakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareTakerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CareTakers
     * const careTaker = await prisma.careTaker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CareTakerUpdateManyArgs>(args: SelectSubset<T, CareTakerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CareTaker.
     * @param {CareTakerUpsertArgs} args - Arguments to update or create a CareTaker.
     * @example
     * // Update or create a CareTaker
     * const careTaker = await prisma.careTaker.upsert({
     *   create: {
     *     // ... data to create a CareTaker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CareTaker we want to update
     *   }
     * })
     */
    upsert<T extends CareTakerUpsertArgs>(args: SelectSubset<T, CareTakerUpsertArgs<ExtArgs>>): Prisma__CareTakerClient<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CareTakers that matches the filter.
     * @param {CareTakerFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const careTaker = await prisma.careTaker.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CareTakerFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a CareTaker.
     * @param {CareTakerAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const careTaker = await prisma.careTaker.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CareTakerAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of CareTakers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareTakerCountArgs} args - Arguments to filter CareTakers to count.
     * @example
     * // Count the number of CareTakers
     * const count = await prisma.careTaker.count({
     *   where: {
     *     // ... the filter for the CareTakers we want to count
     *   }
     * })
    **/
    count<T extends CareTakerCountArgs>(
      args?: Subset<T, CareTakerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CareTakerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CareTaker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareTakerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CareTakerAggregateArgs>(args: Subset<T, CareTakerAggregateArgs>): Prisma.PrismaPromise<GetCareTakerAggregateType<T>>

    /**
     * Group by CareTaker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CareTakerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CareTakerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CareTakerGroupByArgs['orderBy'] }
        : { orderBy?: CareTakerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CareTakerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCareTakerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CareTaker model
   */
  readonly fields: CareTakerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CareTaker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CareTakerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hostel<T extends CareTaker$hostelArgs<ExtArgs> = {}>(args?: Subset<T, CareTaker$hostelArgs<ExtArgs>>): Prisma__HostelClient<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    outpasses<T extends CareTaker$outpassesArgs<ExtArgs> = {}>(args?: Subset<T, CareTaker$outpassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CareTaker model
   */
  interface CareTakerFieldRefs {
    readonly id: FieldRef<"CareTaker", 'String'>
    readonly name: FieldRef<"CareTaker", 'String'>
    readonly email: FieldRef<"CareTaker", 'String'>
    readonly phone: FieldRef<"CareTaker", 'String'>
    readonly image: FieldRef<"CareTaker", 'String'>
    readonly hostelId: FieldRef<"CareTaker", 'String'>
    readonly role: FieldRef<"CareTaker", 'ROLE'>
    readonly password: FieldRef<"CareTaker", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CareTaker findUnique
   */
  export type CareTakerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    /**
     * Filter, which CareTaker to fetch.
     */
    where: CareTakerWhereUniqueInput
  }

  /**
   * CareTaker findUniqueOrThrow
   */
  export type CareTakerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    /**
     * Filter, which CareTaker to fetch.
     */
    where: CareTakerWhereUniqueInput
  }

  /**
   * CareTaker findFirst
   */
  export type CareTakerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    /**
     * Filter, which CareTaker to fetch.
     */
    where?: CareTakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareTakers to fetch.
     */
    orderBy?: CareTakerOrderByWithRelationInput | CareTakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareTakers.
     */
    cursor?: CareTakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareTakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareTakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareTakers.
     */
    distinct?: CareTakerScalarFieldEnum | CareTakerScalarFieldEnum[]
  }

  /**
   * CareTaker findFirstOrThrow
   */
  export type CareTakerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    /**
     * Filter, which CareTaker to fetch.
     */
    where?: CareTakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareTakers to fetch.
     */
    orderBy?: CareTakerOrderByWithRelationInput | CareTakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CareTakers.
     */
    cursor?: CareTakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareTakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareTakers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CareTakers.
     */
    distinct?: CareTakerScalarFieldEnum | CareTakerScalarFieldEnum[]
  }

  /**
   * CareTaker findMany
   */
  export type CareTakerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    /**
     * Filter, which CareTakers to fetch.
     */
    where?: CareTakerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CareTakers to fetch.
     */
    orderBy?: CareTakerOrderByWithRelationInput | CareTakerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CareTakers.
     */
    cursor?: CareTakerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CareTakers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CareTakers.
     */
    skip?: number
    distinct?: CareTakerScalarFieldEnum | CareTakerScalarFieldEnum[]
  }

  /**
   * CareTaker create
   */
  export type CareTakerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    /**
     * The data needed to create a CareTaker.
     */
    data: XOR<CareTakerCreateInput, CareTakerUncheckedCreateInput>
  }

  /**
   * CareTaker createMany
   */
  export type CareTakerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CareTakers.
     */
    data: CareTakerCreateManyInput | CareTakerCreateManyInput[]
  }

  /**
   * CareTaker update
   */
  export type CareTakerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    /**
     * The data needed to update a CareTaker.
     */
    data: XOR<CareTakerUpdateInput, CareTakerUncheckedUpdateInput>
    /**
     * Choose, which CareTaker to update.
     */
    where: CareTakerWhereUniqueInput
  }

  /**
   * CareTaker updateMany
   */
  export type CareTakerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CareTakers.
     */
    data: XOR<CareTakerUpdateManyMutationInput, CareTakerUncheckedUpdateManyInput>
    /**
     * Filter which CareTakers to update
     */
    where?: CareTakerWhereInput
    /**
     * Limit how many CareTakers to update.
     */
    limit?: number
  }

  /**
   * CareTaker upsert
   */
  export type CareTakerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    /**
     * The filter to search for the CareTaker to update in case it exists.
     */
    where: CareTakerWhereUniqueInput
    /**
     * In case the CareTaker found by the `where` argument doesn't exist, create a new CareTaker with this data.
     */
    create: XOR<CareTakerCreateInput, CareTakerUncheckedCreateInput>
    /**
     * In case the CareTaker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CareTakerUpdateInput, CareTakerUncheckedUpdateInput>
  }

  /**
   * CareTaker delete
   */
  export type CareTakerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    /**
     * Filter which CareTaker to delete.
     */
    where: CareTakerWhereUniqueInput
  }

  /**
   * CareTaker deleteMany
   */
  export type CareTakerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CareTakers to delete
     */
    where?: CareTakerWhereInput
    /**
     * Limit how many CareTakers to delete.
     */
    limit?: number
  }

  /**
   * CareTaker findRaw
   */
  export type CareTakerFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CareTaker aggregateRaw
   */
  export type CareTakerAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * CareTaker.hostel
   */
  export type CareTaker$hostelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
    where?: HostelWhereInput
  }

  /**
   * CareTaker.outpasses
   */
  export type CareTaker$outpassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    where?: OutpassWhereInput
    orderBy?: OutpassOrderByWithRelationInput | OutpassOrderByWithRelationInput[]
    cursor?: OutpassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutpassScalarFieldEnum | OutpassScalarFieldEnum[]
  }

  /**
   * CareTaker without action
   */
  export type CareTakerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
  }


  /**
   * Model Hostel
   */

  export type AggregateHostel = {
    _count: HostelCountAggregateOutputType | null
    _avg: HostelAvgAggregateOutputType | null
    _sum: HostelSumAggregateOutputType | null
    _min: HostelMinAggregateOutputType | null
    _max: HostelMaxAggregateOutputType | null
  }

  export type HostelAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type HostelSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type HostelMinAggregateOutputType = {
    id: string | null
    name: string | null
    currentCaretakerId: string | null
    latitude: number | null
    longitude: number | null
  }

  export type HostelMaxAggregateOutputType = {
    id: string | null
    name: string | null
    currentCaretakerId: string | null
    latitude: number | null
    longitude: number | null
  }

  export type HostelCountAggregateOutputType = {
    id: number
    name: number
    currentCaretakerId: number
    latitude: number
    longitude: number
    _all: number
  }


  export type HostelAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type HostelSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type HostelMinAggregateInputType = {
    id?: true
    name?: true
    currentCaretakerId?: true
    latitude?: true
    longitude?: true
  }

  export type HostelMaxAggregateInputType = {
    id?: true
    name?: true
    currentCaretakerId?: true
    latitude?: true
    longitude?: true
  }

  export type HostelCountAggregateInputType = {
    id?: true
    name?: true
    currentCaretakerId?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type HostelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hostel to aggregate.
     */
    where?: HostelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hostels to fetch.
     */
    orderBy?: HostelOrderByWithRelationInput | HostelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HostelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hostels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hostels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Hostels
    **/
    _count?: true | HostelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HostelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HostelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HostelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HostelMaxAggregateInputType
  }

  export type GetHostelAggregateType<T extends HostelAggregateArgs> = {
        [P in keyof T & keyof AggregateHostel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHostel[P]>
      : GetScalarType<T[P], AggregateHostel[P]>
  }




  export type HostelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HostelWhereInput
    orderBy?: HostelOrderByWithAggregationInput | HostelOrderByWithAggregationInput[]
    by: HostelScalarFieldEnum[] | HostelScalarFieldEnum
    having?: HostelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HostelCountAggregateInputType | true
    _avg?: HostelAvgAggregateInputType
    _sum?: HostelSumAggregateInputType
    _min?: HostelMinAggregateInputType
    _max?: HostelMaxAggregateInputType
  }

  export type HostelGroupByOutputType = {
    id: string
    name: string
    currentCaretakerId: string | null
    latitude: number
    longitude: number
    _count: HostelCountAggregateOutputType | null
    _avg: HostelAvgAggregateOutputType | null
    _sum: HostelSumAggregateOutputType | null
    _min: HostelMinAggregateOutputType | null
    _max: HostelMaxAggregateOutputType | null
  }

  type GetHostelGroupByPayload<T extends HostelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HostelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HostelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HostelGroupByOutputType[P]>
            : GetScalarType<T[P], HostelGroupByOutputType[P]>
        }
      >
    >


  export type HostelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    currentCaretakerId?: boolean
    latitude?: boolean
    longitude?: boolean
    rooms?: boolean | Hostel$roomsArgs<ExtArgs>
    caretakers?: boolean | Hostel$caretakersArgs<ExtArgs>
    _count?: boolean | HostelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hostel"]>



  export type HostelSelectScalar = {
    id?: boolean
    name?: boolean
    currentCaretakerId?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type HostelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "currentCaretakerId" | "latitude" | "longitude", ExtArgs["result"]["hostel"]>
  export type HostelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rooms?: boolean | Hostel$roomsArgs<ExtArgs>
    caretakers?: boolean | Hostel$caretakersArgs<ExtArgs>
    _count?: boolean | HostelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $HostelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hostel"
    objects: {
      rooms: Prisma.$RoomPayload<ExtArgs>[]
      caretakers: Prisma.$CareTakerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      currentCaretakerId: string | null
      latitude: number
      longitude: number
    }, ExtArgs["result"]["hostel"]>
    composites: {}
  }

  type HostelGetPayload<S extends boolean | null | undefined | HostelDefaultArgs> = $Result.GetResult<Prisma.$HostelPayload, S>

  type HostelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HostelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HostelCountAggregateInputType | true
    }

  export interface HostelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hostel'], meta: { name: 'Hostel' } }
    /**
     * Find zero or one Hostel that matches the filter.
     * @param {HostelFindUniqueArgs} args - Arguments to find a Hostel
     * @example
     * // Get one Hostel
     * const hostel = await prisma.hostel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HostelFindUniqueArgs>(args: SelectSubset<T, HostelFindUniqueArgs<ExtArgs>>): Prisma__HostelClient<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hostel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HostelFindUniqueOrThrowArgs} args - Arguments to find a Hostel
     * @example
     * // Get one Hostel
     * const hostel = await prisma.hostel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HostelFindUniqueOrThrowArgs>(args: SelectSubset<T, HostelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HostelClient<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hostel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostelFindFirstArgs} args - Arguments to find a Hostel
     * @example
     * // Get one Hostel
     * const hostel = await prisma.hostel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HostelFindFirstArgs>(args?: SelectSubset<T, HostelFindFirstArgs<ExtArgs>>): Prisma__HostelClient<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hostel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostelFindFirstOrThrowArgs} args - Arguments to find a Hostel
     * @example
     * // Get one Hostel
     * const hostel = await prisma.hostel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HostelFindFirstOrThrowArgs>(args?: SelectSubset<T, HostelFindFirstOrThrowArgs<ExtArgs>>): Prisma__HostelClient<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hostels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hostels
     * const hostels = await prisma.hostel.findMany()
     * 
     * // Get first 10 Hostels
     * const hostels = await prisma.hostel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hostelWithIdOnly = await prisma.hostel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HostelFindManyArgs>(args?: SelectSubset<T, HostelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hostel.
     * @param {HostelCreateArgs} args - Arguments to create a Hostel.
     * @example
     * // Create one Hostel
     * const Hostel = await prisma.hostel.create({
     *   data: {
     *     // ... data to create a Hostel
     *   }
     * })
     * 
     */
    create<T extends HostelCreateArgs>(args: SelectSubset<T, HostelCreateArgs<ExtArgs>>): Prisma__HostelClient<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hostels.
     * @param {HostelCreateManyArgs} args - Arguments to create many Hostels.
     * @example
     * // Create many Hostels
     * const hostel = await prisma.hostel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HostelCreateManyArgs>(args?: SelectSubset<T, HostelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hostel.
     * @param {HostelDeleteArgs} args - Arguments to delete one Hostel.
     * @example
     * // Delete one Hostel
     * const Hostel = await prisma.hostel.delete({
     *   where: {
     *     // ... filter to delete one Hostel
     *   }
     * })
     * 
     */
    delete<T extends HostelDeleteArgs>(args: SelectSubset<T, HostelDeleteArgs<ExtArgs>>): Prisma__HostelClient<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hostel.
     * @param {HostelUpdateArgs} args - Arguments to update one Hostel.
     * @example
     * // Update one Hostel
     * const hostel = await prisma.hostel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HostelUpdateArgs>(args: SelectSubset<T, HostelUpdateArgs<ExtArgs>>): Prisma__HostelClient<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hostels.
     * @param {HostelDeleteManyArgs} args - Arguments to filter Hostels to delete.
     * @example
     * // Delete a few Hostels
     * const { count } = await prisma.hostel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HostelDeleteManyArgs>(args?: SelectSubset<T, HostelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hostels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hostels
     * const hostel = await prisma.hostel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HostelUpdateManyArgs>(args: SelectSubset<T, HostelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hostel.
     * @param {HostelUpsertArgs} args - Arguments to update or create a Hostel.
     * @example
     * // Update or create a Hostel
     * const hostel = await prisma.hostel.upsert({
     *   create: {
     *     // ... data to create a Hostel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hostel we want to update
     *   }
     * })
     */
    upsert<T extends HostelUpsertArgs>(args: SelectSubset<T, HostelUpsertArgs<ExtArgs>>): Prisma__HostelClient<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hostels that matches the filter.
     * @param {HostelFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hostel = await prisma.hostel.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: HostelFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Hostel.
     * @param {HostelAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hostel = await prisma.hostel.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HostelAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Hostels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostelCountArgs} args - Arguments to filter Hostels to count.
     * @example
     * // Count the number of Hostels
     * const count = await prisma.hostel.count({
     *   where: {
     *     // ... the filter for the Hostels we want to count
     *   }
     * })
    **/
    count<T extends HostelCountArgs>(
      args?: Subset<T, HostelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HostelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hostel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HostelAggregateArgs>(args: Subset<T, HostelAggregateArgs>): Prisma.PrismaPromise<GetHostelAggregateType<T>>

    /**
     * Group by Hostel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HostelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HostelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HostelGroupByArgs['orderBy'] }
        : { orderBy?: HostelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HostelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHostelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hostel model
   */
  readonly fields: HostelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hostel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HostelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rooms<T extends Hostel$roomsArgs<ExtArgs> = {}>(args?: Subset<T, Hostel$roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    caretakers<T extends Hostel$caretakersArgs<ExtArgs> = {}>(args?: Subset<T, Hostel$caretakersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Hostel model
   */
  interface HostelFieldRefs {
    readonly id: FieldRef<"Hostel", 'String'>
    readonly name: FieldRef<"Hostel", 'String'>
    readonly currentCaretakerId: FieldRef<"Hostel", 'String'>
    readonly latitude: FieldRef<"Hostel", 'Float'>
    readonly longitude: FieldRef<"Hostel", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Hostel findUnique
   */
  export type HostelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
    /**
     * Filter, which Hostel to fetch.
     */
    where: HostelWhereUniqueInput
  }

  /**
   * Hostel findUniqueOrThrow
   */
  export type HostelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
    /**
     * Filter, which Hostel to fetch.
     */
    where: HostelWhereUniqueInput
  }

  /**
   * Hostel findFirst
   */
  export type HostelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
    /**
     * Filter, which Hostel to fetch.
     */
    where?: HostelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hostels to fetch.
     */
    orderBy?: HostelOrderByWithRelationInput | HostelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hostels.
     */
    cursor?: HostelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hostels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hostels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hostels.
     */
    distinct?: HostelScalarFieldEnum | HostelScalarFieldEnum[]
  }

  /**
   * Hostel findFirstOrThrow
   */
  export type HostelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
    /**
     * Filter, which Hostel to fetch.
     */
    where?: HostelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hostels to fetch.
     */
    orderBy?: HostelOrderByWithRelationInput | HostelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Hostels.
     */
    cursor?: HostelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hostels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hostels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Hostels.
     */
    distinct?: HostelScalarFieldEnum | HostelScalarFieldEnum[]
  }

  /**
   * Hostel findMany
   */
  export type HostelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
    /**
     * Filter, which Hostels to fetch.
     */
    where?: HostelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Hostels to fetch.
     */
    orderBy?: HostelOrderByWithRelationInput | HostelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Hostels.
     */
    cursor?: HostelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Hostels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Hostels.
     */
    skip?: number
    distinct?: HostelScalarFieldEnum | HostelScalarFieldEnum[]
  }

  /**
   * Hostel create
   */
  export type HostelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
    /**
     * The data needed to create a Hostel.
     */
    data: XOR<HostelCreateInput, HostelUncheckedCreateInput>
  }

  /**
   * Hostel createMany
   */
  export type HostelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Hostels.
     */
    data: HostelCreateManyInput | HostelCreateManyInput[]
  }

  /**
   * Hostel update
   */
  export type HostelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
    /**
     * The data needed to update a Hostel.
     */
    data: XOR<HostelUpdateInput, HostelUncheckedUpdateInput>
    /**
     * Choose, which Hostel to update.
     */
    where: HostelWhereUniqueInput
  }

  /**
   * Hostel updateMany
   */
  export type HostelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Hostels.
     */
    data: XOR<HostelUpdateManyMutationInput, HostelUncheckedUpdateManyInput>
    /**
     * Filter which Hostels to update
     */
    where?: HostelWhereInput
    /**
     * Limit how many Hostels to update.
     */
    limit?: number
  }

  /**
   * Hostel upsert
   */
  export type HostelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
    /**
     * The filter to search for the Hostel to update in case it exists.
     */
    where: HostelWhereUniqueInput
    /**
     * In case the Hostel found by the `where` argument doesn't exist, create a new Hostel with this data.
     */
    create: XOR<HostelCreateInput, HostelUncheckedCreateInput>
    /**
     * In case the Hostel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HostelUpdateInput, HostelUncheckedUpdateInput>
  }

  /**
   * Hostel delete
   */
  export type HostelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
    /**
     * Filter which Hostel to delete.
     */
    where: HostelWhereUniqueInput
  }

  /**
   * Hostel deleteMany
   */
  export type HostelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hostels to delete
     */
    where?: HostelWhereInput
    /**
     * Limit how many Hostels to delete.
     */
    limit?: number
  }

  /**
   * Hostel findRaw
   */
  export type HostelFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Hostel aggregateRaw
   */
  export type HostelAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Hostel.rooms
   */
  export type Hostel$roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    cursor?: RoomWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Hostel.caretakers
   */
  export type Hostel$caretakersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    where?: CareTakerWhereInput
    orderBy?: CareTakerOrderByWithRelationInput | CareTakerOrderByWithRelationInput[]
    cursor?: CareTakerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CareTakerScalarFieldEnum | CareTakerScalarFieldEnum[]
  }

  /**
   * Hostel without action
   */
  export type HostelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hostel
     */
    select?: HostelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hostel
     */
    omit?: HostelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HostelInclude<ExtArgs> | null
  }


  /**
   * Model Room
   */

  export type AggregateRoom = {
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  export type RoomAvgAggregateOutputType = {
    quantity: number | null
  }

  export type RoomSumAggregateOutputType = {
    quantity: number | null
  }

  export type RoomMinAggregateOutputType = {
    id: string | null
    name: string | null
    hostelId: string | null
    quantity: number | null
  }

  export type RoomMaxAggregateOutputType = {
    id: string | null
    name: string | null
    hostelId: string | null
    quantity: number | null
  }

  export type RoomCountAggregateOutputType = {
    id: number
    name: number
    hostelId: number
    quantity: number
    _all: number
  }


  export type RoomAvgAggregateInputType = {
    quantity?: true
  }

  export type RoomSumAggregateInputType = {
    quantity?: true
  }

  export type RoomMinAggregateInputType = {
    id?: true
    name?: true
    hostelId?: true
    quantity?: true
  }

  export type RoomMaxAggregateInputType = {
    id?: true
    name?: true
    hostelId?: true
    quantity?: true
  }

  export type RoomCountAggregateInputType = {
    id?: true
    name?: true
    hostelId?: true
    quantity?: true
    _all?: true
  }

  export type RoomAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Room to aggregate.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rooms
    **/
    _count?: true | RoomCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoomAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoomSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoomMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoomMaxAggregateInputType
  }

  export type GetRoomAggregateType<T extends RoomAggregateArgs> = {
        [P in keyof T & keyof AggregateRoom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoom[P]>
      : GetScalarType<T[P], AggregateRoom[P]>
  }




  export type RoomGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoomWhereInput
    orderBy?: RoomOrderByWithAggregationInput | RoomOrderByWithAggregationInput[]
    by: RoomScalarFieldEnum[] | RoomScalarFieldEnum
    having?: RoomScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoomCountAggregateInputType | true
    _avg?: RoomAvgAggregateInputType
    _sum?: RoomSumAggregateInputType
    _min?: RoomMinAggregateInputType
    _max?: RoomMaxAggregateInputType
  }

  export type RoomGroupByOutputType = {
    id: string
    name: string
    hostelId: string
    quantity: number | null
    _count: RoomCountAggregateOutputType | null
    _avg: RoomAvgAggregateOutputType | null
    _sum: RoomSumAggregateOutputType | null
    _min: RoomMinAggregateOutputType | null
    _max: RoomMaxAggregateOutputType | null
  }

  type GetRoomGroupByPayload<T extends RoomGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoomGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoomGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoomGroupByOutputType[P]>
            : GetScalarType<T[P], RoomGroupByOutputType[P]>
        }
      >
    >


  export type RoomSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    hostelId?: boolean
    quantity?: boolean
    hostel?: boolean | HostelDefaultArgs<ExtArgs>
    students?: boolean | Room$studentsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["room"]>



  export type RoomSelectScalar = {
    id?: boolean
    name?: boolean
    hostelId?: boolean
    quantity?: boolean
  }

  export type RoomOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "hostelId" | "quantity", ExtArgs["result"]["room"]>
  export type RoomInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hostel?: boolean | HostelDefaultArgs<ExtArgs>
    students?: boolean | Room$studentsArgs<ExtArgs>
    _count?: boolean | RoomCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RoomPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Room"
    objects: {
      hostel: Prisma.$HostelPayload<ExtArgs>
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      hostelId: string
      quantity: number | null
    }, ExtArgs["result"]["room"]>
    composites: {}
  }

  type RoomGetPayload<S extends boolean | null | undefined | RoomDefaultArgs> = $Result.GetResult<Prisma.$RoomPayload, S>

  type RoomCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoomFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoomCountAggregateInputType | true
    }

  export interface RoomDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Room'], meta: { name: 'Room' } }
    /**
     * Find zero or one Room that matches the filter.
     * @param {RoomFindUniqueArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoomFindUniqueArgs>(args: SelectSubset<T, RoomFindUniqueArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Room that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoomFindUniqueOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoomFindUniqueOrThrowArgs>(args: SelectSubset<T, RoomFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoomFindFirstArgs>(args?: SelectSubset<T, RoomFindFirstArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Room that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindFirstOrThrowArgs} args - Arguments to find a Room
     * @example
     * // Get one Room
     * const room = await prisma.room.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoomFindFirstOrThrowArgs>(args?: SelectSubset<T, RoomFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rooms
     * const rooms = await prisma.room.findMany()
     * 
     * // Get first 10 Rooms
     * const rooms = await prisma.room.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roomWithIdOnly = await prisma.room.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoomFindManyArgs>(args?: SelectSubset<T, RoomFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Room.
     * @param {RoomCreateArgs} args - Arguments to create a Room.
     * @example
     * // Create one Room
     * const Room = await prisma.room.create({
     *   data: {
     *     // ... data to create a Room
     *   }
     * })
     * 
     */
    create<T extends RoomCreateArgs>(args: SelectSubset<T, RoomCreateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rooms.
     * @param {RoomCreateManyArgs} args - Arguments to create many Rooms.
     * @example
     * // Create many Rooms
     * const room = await prisma.room.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoomCreateManyArgs>(args?: SelectSubset<T, RoomCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Room.
     * @param {RoomDeleteArgs} args - Arguments to delete one Room.
     * @example
     * // Delete one Room
     * const Room = await prisma.room.delete({
     *   where: {
     *     // ... filter to delete one Room
     *   }
     * })
     * 
     */
    delete<T extends RoomDeleteArgs>(args: SelectSubset<T, RoomDeleteArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Room.
     * @param {RoomUpdateArgs} args - Arguments to update one Room.
     * @example
     * // Update one Room
     * const room = await prisma.room.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoomUpdateArgs>(args: SelectSubset<T, RoomUpdateArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rooms.
     * @param {RoomDeleteManyArgs} args - Arguments to filter Rooms to delete.
     * @example
     * // Delete a few Rooms
     * const { count } = await prisma.room.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoomDeleteManyArgs>(args?: SelectSubset<T, RoomDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rooms
     * const room = await prisma.room.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoomUpdateManyArgs>(args: SelectSubset<T, RoomUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Room.
     * @param {RoomUpsertArgs} args - Arguments to update or create a Room.
     * @example
     * // Update or create a Room
     * const room = await prisma.room.upsert({
     *   create: {
     *     // ... data to create a Room
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Room we want to update
     *   }
     * })
     */
    upsert<T extends RoomUpsertArgs>(args: SelectSubset<T, RoomUpsertArgs<ExtArgs>>): Prisma__RoomClient<$Result.GetResult<Prisma.$RoomPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rooms that matches the filter.
     * @param {RoomFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const room = await prisma.room.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: RoomFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Room.
     * @param {RoomAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const room = await prisma.room.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: RoomAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomCountArgs} args - Arguments to filter Rooms to count.
     * @example
     * // Count the number of Rooms
     * const count = await prisma.room.count({
     *   where: {
     *     // ... the filter for the Rooms we want to count
     *   }
     * })
    **/
    count<T extends RoomCountArgs>(
      args?: Subset<T, RoomCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoomCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoomAggregateArgs>(args: Subset<T, RoomAggregateArgs>): Prisma.PrismaPromise<GetRoomAggregateType<T>>

    /**
     * Group by Room.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoomGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoomGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoomGroupByArgs['orderBy'] }
        : { orderBy?: RoomGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoomGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Room model
   */
  readonly fields: RoomFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Room.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoomClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hostel<T extends HostelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HostelDefaultArgs<ExtArgs>>): Prisma__HostelClient<$Result.GetResult<Prisma.$HostelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    students<T extends Room$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Room$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Room model
   */
  interface RoomFieldRefs {
    readonly id: FieldRef<"Room", 'String'>
    readonly name: FieldRef<"Room", 'String'>
    readonly hostelId: FieldRef<"Room", 'String'>
    readonly quantity: FieldRef<"Room", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Room findUnique
   */
  export type RoomFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findUniqueOrThrow
   */
  export type RoomFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room findFirst
   */
  export type RoomFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findFirstOrThrow
   */
  export type RoomFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Room to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rooms.
     */
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room findMany
   */
  export type RoomFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter, which Rooms to fetch.
     */
    where?: RoomWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rooms to fetch.
     */
    orderBy?: RoomOrderByWithRelationInput | RoomOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rooms.
     */
    cursor?: RoomWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rooms.
     */
    skip?: number
    distinct?: RoomScalarFieldEnum | RoomScalarFieldEnum[]
  }

  /**
   * Room create
   */
  export type RoomCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to create a Room.
     */
    data: XOR<RoomCreateInput, RoomUncheckedCreateInput>
  }

  /**
   * Room createMany
   */
  export type RoomCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rooms.
     */
    data: RoomCreateManyInput | RoomCreateManyInput[]
  }

  /**
   * Room update
   */
  export type RoomUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The data needed to update a Room.
     */
    data: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
    /**
     * Choose, which Room to update.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room updateMany
   */
  export type RoomUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rooms.
     */
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyInput>
    /**
     * Filter which Rooms to update
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to update.
     */
    limit?: number
  }

  /**
   * Room upsert
   */
  export type RoomUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * The filter to search for the Room to update in case it exists.
     */
    where: RoomWhereUniqueInput
    /**
     * In case the Room found by the `where` argument doesn't exist, create a new Room with this data.
     */
    create: XOR<RoomCreateInput, RoomUncheckedCreateInput>
    /**
     * In case the Room was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoomUpdateInput, RoomUncheckedUpdateInput>
  }

  /**
   * Room delete
   */
  export type RoomDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
    /**
     * Filter which Room to delete.
     */
    where: RoomWhereUniqueInput
  }

  /**
   * Room deleteMany
   */
  export type RoomDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rooms to delete
     */
    where?: RoomWhereInput
    /**
     * Limit how many Rooms to delete.
     */
    limit?: number
  }

  /**
   * Room findRaw
   */
  export type RoomFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Room aggregateRaw
   */
  export type RoomAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Room.students
   */
  export type Room$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Room without action
   */
  export type RoomDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Room
     */
    select?: RoomSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Room
     */
    omit?: RoomOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoomInclude<ExtArgs> | null
  }


  /**
   * Model Outpass
   */

  export type AggregateOutpass = {
    _count: OutpassCountAggregateOutputType | null
    _min: OutpassMinAggregateOutputType | null
    _max: OutpassMaxAggregateOutputType | null
  }

  export type OutpassMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    from: Date | null
    to: Date | null
    purpose: string | null
    letter: string | null
    createdAt: Date | null
    caretakerId: string | null
    status: $Enums.OUTPASS_STATUS | null
    type: $Enums.OUTPASS_TYPE | null
  }

  export type OutpassMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    from: Date | null
    to: Date | null
    purpose: string | null
    letter: string | null
    createdAt: Date | null
    caretakerId: string | null
    status: $Enums.OUTPASS_STATUS | null
    type: $Enums.OUTPASS_TYPE | null
  }

  export type OutpassCountAggregateOutputType = {
    id: number
    studentId: number
    from: number
    to: number
    purpose: number
    letter: number
    createdAt: number
    caretakerId: number
    status: number
    type: number
    _all: number
  }


  export type OutpassMinAggregateInputType = {
    id?: true
    studentId?: true
    from?: true
    to?: true
    purpose?: true
    letter?: true
    createdAt?: true
    caretakerId?: true
    status?: true
    type?: true
  }

  export type OutpassMaxAggregateInputType = {
    id?: true
    studentId?: true
    from?: true
    to?: true
    purpose?: true
    letter?: true
    createdAt?: true
    caretakerId?: true
    status?: true
    type?: true
  }

  export type OutpassCountAggregateInputType = {
    id?: true
    studentId?: true
    from?: true
    to?: true
    purpose?: true
    letter?: true
    createdAt?: true
    caretakerId?: true
    status?: true
    type?: true
    _all?: true
  }

  export type OutpassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outpass to aggregate.
     */
    where?: OutpassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outpasses to fetch.
     */
    orderBy?: OutpassOrderByWithRelationInput | OutpassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutpassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outpasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outpasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Outpasses
    **/
    _count?: true | OutpassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutpassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutpassMaxAggregateInputType
  }

  export type GetOutpassAggregateType<T extends OutpassAggregateArgs> = {
        [P in keyof T & keyof AggregateOutpass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutpass[P]>
      : GetScalarType<T[P], AggregateOutpass[P]>
  }




  export type OutpassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutpassWhereInput
    orderBy?: OutpassOrderByWithAggregationInput | OutpassOrderByWithAggregationInput[]
    by: OutpassScalarFieldEnum[] | OutpassScalarFieldEnum
    having?: OutpassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutpassCountAggregateInputType | true
    _min?: OutpassMinAggregateInputType
    _max?: OutpassMaxAggregateInputType
  }

  export type OutpassGroupByOutputType = {
    id: string
    studentId: string
    from: Date
    to: Date
    purpose: string | null
    letter: string
    createdAt: Date
    caretakerId: string | null
    status: $Enums.OUTPASS_STATUS
    type: $Enums.OUTPASS_TYPE
    _count: OutpassCountAggregateOutputType | null
    _min: OutpassMinAggregateOutputType | null
    _max: OutpassMaxAggregateOutputType | null
  }

  type GetOutpassGroupByPayload<T extends OutpassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutpassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutpassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutpassGroupByOutputType[P]>
            : GetScalarType<T[P], OutpassGroupByOutputType[P]>
        }
      >
    >


  export type OutpassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    from?: boolean
    to?: boolean
    purpose?: boolean
    letter?: boolean
    createdAt?: boolean
    caretakerId?: boolean
    status?: boolean
    type?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
    caretaker?: boolean | Outpass$caretakerArgs<ExtArgs>
  }, ExtArgs["result"]["outpass"]>



  export type OutpassSelectScalar = {
    id?: boolean
    studentId?: boolean
    from?: boolean
    to?: boolean
    purpose?: boolean
    letter?: boolean
    createdAt?: boolean
    caretakerId?: boolean
    status?: boolean
    type?: boolean
  }

  export type OutpassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "from" | "to" | "purpose" | "letter" | "createdAt" | "caretakerId" | "status" | "type", ExtArgs["result"]["outpass"]>
  export type OutpassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
    caretaker?: boolean | Outpass$caretakerArgs<ExtArgs>
  }

  export type $OutpassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Outpass"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
      caretaker: Prisma.$CareTakerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      from: Date
      to: Date
      purpose: string | null
      letter: string
      createdAt: Date
      caretakerId: string | null
      status: $Enums.OUTPASS_STATUS
      type: $Enums.OUTPASS_TYPE
    }, ExtArgs["result"]["outpass"]>
    composites: {}
  }

  type OutpassGetPayload<S extends boolean | null | undefined | OutpassDefaultArgs> = $Result.GetResult<Prisma.$OutpassPayload, S>

  type OutpassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutpassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutpassCountAggregateInputType | true
    }

  export interface OutpassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Outpass'], meta: { name: 'Outpass' } }
    /**
     * Find zero or one Outpass that matches the filter.
     * @param {OutpassFindUniqueArgs} args - Arguments to find a Outpass
     * @example
     * // Get one Outpass
     * const outpass = await prisma.outpass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutpassFindUniqueArgs>(args: SelectSubset<T, OutpassFindUniqueArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outpass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutpassFindUniqueOrThrowArgs} args - Arguments to find a Outpass
     * @example
     * // Get one Outpass
     * const outpass = await prisma.outpass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutpassFindUniqueOrThrowArgs>(args: SelectSubset<T, OutpassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outpass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassFindFirstArgs} args - Arguments to find a Outpass
     * @example
     * // Get one Outpass
     * const outpass = await prisma.outpass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutpassFindFirstArgs>(args?: SelectSubset<T, OutpassFindFirstArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outpass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassFindFirstOrThrowArgs} args - Arguments to find a Outpass
     * @example
     * // Get one Outpass
     * const outpass = await prisma.outpass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutpassFindFirstOrThrowArgs>(args?: SelectSubset<T, OutpassFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outpasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outpasses
     * const outpasses = await prisma.outpass.findMany()
     * 
     * // Get first 10 Outpasses
     * const outpasses = await prisma.outpass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outpassWithIdOnly = await prisma.outpass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutpassFindManyArgs>(args?: SelectSubset<T, OutpassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outpass.
     * @param {OutpassCreateArgs} args - Arguments to create a Outpass.
     * @example
     * // Create one Outpass
     * const Outpass = await prisma.outpass.create({
     *   data: {
     *     // ... data to create a Outpass
     *   }
     * })
     * 
     */
    create<T extends OutpassCreateArgs>(args: SelectSubset<T, OutpassCreateArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outpasses.
     * @param {OutpassCreateManyArgs} args - Arguments to create many Outpasses.
     * @example
     * // Create many Outpasses
     * const outpass = await prisma.outpass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutpassCreateManyArgs>(args?: SelectSubset<T, OutpassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Outpass.
     * @param {OutpassDeleteArgs} args - Arguments to delete one Outpass.
     * @example
     * // Delete one Outpass
     * const Outpass = await prisma.outpass.delete({
     *   where: {
     *     // ... filter to delete one Outpass
     *   }
     * })
     * 
     */
    delete<T extends OutpassDeleteArgs>(args: SelectSubset<T, OutpassDeleteArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outpass.
     * @param {OutpassUpdateArgs} args - Arguments to update one Outpass.
     * @example
     * // Update one Outpass
     * const outpass = await prisma.outpass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutpassUpdateArgs>(args: SelectSubset<T, OutpassUpdateArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outpasses.
     * @param {OutpassDeleteManyArgs} args - Arguments to filter Outpasses to delete.
     * @example
     * // Delete a few Outpasses
     * const { count } = await prisma.outpass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutpassDeleteManyArgs>(args?: SelectSubset<T, OutpassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outpasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outpasses
     * const outpass = await prisma.outpass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutpassUpdateManyArgs>(args: SelectSubset<T, OutpassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outpass.
     * @param {OutpassUpsertArgs} args - Arguments to update or create a Outpass.
     * @example
     * // Update or create a Outpass
     * const outpass = await prisma.outpass.upsert({
     *   create: {
     *     // ... data to create a Outpass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outpass we want to update
     *   }
     * })
     */
    upsert<T extends OutpassUpsertArgs>(args: SelectSubset<T, OutpassUpsertArgs<ExtArgs>>): Prisma__OutpassClient<$Result.GetResult<Prisma.$OutpassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outpasses that matches the filter.
     * @param {OutpassFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const outpass = await prisma.outpass.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: OutpassFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Outpass.
     * @param {OutpassAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const outpass = await prisma.outpass.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OutpassAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Outpasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassCountArgs} args - Arguments to filter Outpasses to count.
     * @example
     * // Count the number of Outpasses
     * const count = await prisma.outpass.count({
     *   where: {
     *     // ... the filter for the Outpasses we want to count
     *   }
     * })
    **/
    count<T extends OutpassCountArgs>(
      args?: Subset<T, OutpassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutpassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outpass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OutpassAggregateArgs>(args: Subset<T, OutpassAggregateArgs>): Prisma.PrismaPromise<GetOutpassAggregateType<T>>

    /**
     * Group by Outpass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutpassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OutpassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutpassGroupByArgs['orderBy'] }
        : { orderBy?: OutpassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OutpassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutpassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Outpass model
   */
  readonly fields: OutpassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Outpass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutpassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    caretaker<T extends Outpass$caretakerArgs<ExtArgs> = {}>(args?: Subset<T, Outpass$caretakerArgs<ExtArgs>>): Prisma__CareTakerClient<$Result.GetResult<Prisma.$CareTakerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Outpass model
   */
  interface OutpassFieldRefs {
    readonly id: FieldRef<"Outpass", 'String'>
    readonly studentId: FieldRef<"Outpass", 'String'>
    readonly from: FieldRef<"Outpass", 'DateTime'>
    readonly to: FieldRef<"Outpass", 'DateTime'>
    readonly purpose: FieldRef<"Outpass", 'String'>
    readonly letter: FieldRef<"Outpass", 'String'>
    readonly createdAt: FieldRef<"Outpass", 'DateTime'>
    readonly caretakerId: FieldRef<"Outpass", 'String'>
    readonly status: FieldRef<"Outpass", 'OUTPASS_STATUS'>
    readonly type: FieldRef<"Outpass", 'OUTPASS_TYPE'>
  }
    

  // Custom InputTypes
  /**
   * Outpass findUnique
   */
  export type OutpassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    /**
     * Filter, which Outpass to fetch.
     */
    where: OutpassWhereUniqueInput
  }

  /**
   * Outpass findUniqueOrThrow
   */
  export type OutpassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    /**
     * Filter, which Outpass to fetch.
     */
    where: OutpassWhereUniqueInput
  }

  /**
   * Outpass findFirst
   */
  export type OutpassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    /**
     * Filter, which Outpass to fetch.
     */
    where?: OutpassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outpasses to fetch.
     */
    orderBy?: OutpassOrderByWithRelationInput | OutpassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outpasses.
     */
    cursor?: OutpassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outpasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outpasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outpasses.
     */
    distinct?: OutpassScalarFieldEnum | OutpassScalarFieldEnum[]
  }

  /**
   * Outpass findFirstOrThrow
   */
  export type OutpassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    /**
     * Filter, which Outpass to fetch.
     */
    where?: OutpassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outpasses to fetch.
     */
    orderBy?: OutpassOrderByWithRelationInput | OutpassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Outpasses.
     */
    cursor?: OutpassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outpasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outpasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Outpasses.
     */
    distinct?: OutpassScalarFieldEnum | OutpassScalarFieldEnum[]
  }

  /**
   * Outpass findMany
   */
  export type OutpassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    /**
     * Filter, which Outpasses to fetch.
     */
    where?: OutpassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Outpasses to fetch.
     */
    orderBy?: OutpassOrderByWithRelationInput | OutpassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Outpasses.
     */
    cursor?: OutpassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Outpasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Outpasses.
     */
    skip?: number
    distinct?: OutpassScalarFieldEnum | OutpassScalarFieldEnum[]
  }

  /**
   * Outpass create
   */
  export type OutpassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    /**
     * The data needed to create a Outpass.
     */
    data: XOR<OutpassCreateInput, OutpassUncheckedCreateInput>
  }

  /**
   * Outpass createMany
   */
  export type OutpassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Outpasses.
     */
    data: OutpassCreateManyInput | OutpassCreateManyInput[]
  }

  /**
   * Outpass update
   */
  export type OutpassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    /**
     * The data needed to update a Outpass.
     */
    data: XOR<OutpassUpdateInput, OutpassUncheckedUpdateInput>
    /**
     * Choose, which Outpass to update.
     */
    where: OutpassWhereUniqueInput
  }

  /**
   * Outpass updateMany
   */
  export type OutpassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Outpasses.
     */
    data: XOR<OutpassUpdateManyMutationInput, OutpassUncheckedUpdateManyInput>
    /**
     * Filter which Outpasses to update
     */
    where?: OutpassWhereInput
    /**
     * Limit how many Outpasses to update.
     */
    limit?: number
  }

  /**
   * Outpass upsert
   */
  export type OutpassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    /**
     * The filter to search for the Outpass to update in case it exists.
     */
    where: OutpassWhereUniqueInput
    /**
     * In case the Outpass found by the `where` argument doesn't exist, create a new Outpass with this data.
     */
    create: XOR<OutpassCreateInput, OutpassUncheckedCreateInput>
    /**
     * In case the Outpass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutpassUpdateInput, OutpassUncheckedUpdateInput>
  }

  /**
   * Outpass delete
   */
  export type OutpassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
    /**
     * Filter which Outpass to delete.
     */
    where: OutpassWhereUniqueInput
  }

  /**
   * Outpass deleteMany
   */
  export type OutpassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Outpasses to delete
     */
    where?: OutpassWhereInput
    /**
     * Limit how many Outpasses to delete.
     */
    limit?: number
  }

  /**
   * Outpass findRaw
   */
  export type OutpassFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Outpass aggregateRaw
   */
  export type OutpassAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Outpass.caretaker
   */
  export type Outpass$caretakerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CareTaker
     */
    select?: CareTakerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CareTaker
     */
    omit?: CareTakerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CareTakerInclude<ExtArgs> | null
    where?: CareTakerWhereInput
  }

  /**
   * Outpass without action
   */
  export type OutpassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Outpass
     */
    select?: OutpassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Outpass
     */
    omit?: OutpassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutpassInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const StudentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    collegeId: 'collegeId',
    email: 'email',
    phone: 'phone',
    address: 'address',
    image: 'image',
    password: 'password',
    roomId: 'roomId',
    criticalPoints: 'criticalPoints',
    out: 'out',
    outType: 'outType'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    checkInAt: 'checkInAt',
    checkOutAt: 'checkOutAt',
    type: 'type',
    createdAt: 'createdAt',
    expectedIn: 'expectedIn'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const CareTakerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    image: 'image',
    hostelId: 'hostelId',
    role: 'role',
    password: 'password'
  };

  export type CareTakerScalarFieldEnum = (typeof CareTakerScalarFieldEnum)[keyof typeof CareTakerScalarFieldEnum]


  export const HostelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    currentCaretakerId: 'currentCaretakerId',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type HostelScalarFieldEnum = (typeof HostelScalarFieldEnum)[keyof typeof HostelScalarFieldEnum]


  export const RoomScalarFieldEnum: {
    id: 'id',
    name: 'name',
    hostelId: 'hostelId',
    quantity: 'quantity'
  };

  export type RoomScalarFieldEnum = (typeof RoomScalarFieldEnum)[keyof typeof RoomScalarFieldEnum]


  export const OutpassScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    from: 'from',
    to: 'to',
    purpose: 'purpose',
    letter: 'letter',
    createdAt: 'createdAt',
    caretakerId: 'caretakerId',
    status: 'status',
    type: 'type'
  };

  export type OutpassScalarFieldEnum = (typeof OutpassScalarFieldEnum)[keyof typeof OutpassScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'AttendanceType'
   */
  export type EnumAttendanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceType'>
    


  /**
   * Reference to a field of type 'AttendanceType[]'
   */
  export type ListEnumAttendanceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AttendanceType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'ROLE'
   */
  export type EnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE'>
    


  /**
   * Reference to a field of type 'ROLE[]'
   */
  export type ListEnumROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ROLE[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OUTPASS_STATUS'
   */
  export type EnumOUTPASS_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OUTPASS_STATUS'>
    


  /**
   * Reference to a field of type 'OUTPASS_STATUS[]'
   */
  export type ListEnumOUTPASS_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OUTPASS_STATUS[]'>
    


  /**
   * Reference to a field of type 'OUTPASS_TYPE'
   */
  export type EnumOUTPASS_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OUTPASS_TYPE'>
    


  /**
   * Reference to a field of type 'OUTPASS_TYPE[]'
   */
  export type ListEnumOUTPASS_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OUTPASS_TYPE[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    collegeId?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    address?: StringFilter<"Student"> | string
    image?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    roomId?: StringFilter<"Student"> | string
    criticalPoints?: IntFilter<"Student"> | number
    out?: BoolFilter<"Student"> | boolean
    outType?: EnumAttendanceTypeFilter<"Student"> | $Enums.AttendanceType
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    attendanceRecords?: AttendanceListRelationFilter
    outpasses?: OutpassListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    password?: SortOrder
    roomId?: SortOrder
    criticalPoints?: SortOrder
    out?: SortOrder
    outType?: SortOrder
    room?: RoomOrderByWithRelationInput
    attendanceRecords?: AttendanceOrderByRelationAggregateInput
    outpasses?: OutpassOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    collegeId?: string
    email?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    address?: StringFilter<"Student"> | string
    image?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    roomId?: StringFilter<"Student"> | string
    criticalPoints?: IntFilter<"Student"> | number
    out?: BoolFilter<"Student"> | boolean
    outType?: EnumAttendanceTypeFilter<"Student"> | $Enums.AttendanceType
    room?: XOR<RoomScalarRelationFilter, RoomWhereInput>
    attendanceRecords?: AttendanceListRelationFilter
    outpasses?: OutpassListRelationFilter
  }, "id" | "collegeId" | "email">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    password?: SortOrder
    roomId?: SortOrder
    criticalPoints?: SortOrder
    out?: SortOrder
    outType?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    name?: StringWithAggregatesFilter<"Student"> | string
    collegeId?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    address?: StringWithAggregatesFilter<"Student"> | string
    image?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    roomId?: StringWithAggregatesFilter<"Student"> | string
    criticalPoints?: IntWithAggregatesFilter<"Student"> | number
    out?: BoolWithAggregatesFilter<"Student"> | boolean
    outType?: EnumAttendanceTypeWithAggregatesFilter<"Student"> | $Enums.AttendanceType
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    checkInAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOutAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    type?: EnumAttendanceTypeFilter<"Attendance"> | $Enums.AttendanceType
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    expectedIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    expectedIn?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    studentId?: StringFilter<"Attendance"> | string
    checkInAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOutAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    type?: EnumAttendanceTypeFilter<"Attendance"> | $Enums.AttendanceType
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    expectedIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    expectedIn?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    studentId?: StringWithAggregatesFilter<"Attendance"> | string
    checkInAt?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    checkOutAt?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    type?: EnumAttendanceTypeWithAggregatesFilter<"Attendance"> | $Enums.AttendanceType
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    expectedIn?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
  }

  export type CareTakerWhereInput = {
    AND?: CareTakerWhereInput | CareTakerWhereInput[]
    OR?: CareTakerWhereInput[]
    NOT?: CareTakerWhereInput | CareTakerWhereInput[]
    id?: StringFilter<"CareTaker"> | string
    name?: StringFilter<"CareTaker"> | string
    email?: StringFilter<"CareTaker"> | string
    phone?: StringFilter<"CareTaker"> | string
    image?: StringFilter<"CareTaker"> | string
    hostelId?: StringNullableFilter<"CareTaker"> | string | null
    role?: EnumROLEFilter<"CareTaker"> | $Enums.ROLE
    password?: StringFilter<"CareTaker"> | string
    hostel?: XOR<HostelNullableScalarRelationFilter, HostelWhereInput> | null
    outpasses?: OutpassListRelationFilter
  }

  export type CareTakerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    hostelId?: SortOrder
    role?: SortOrder
    password?: SortOrder
    hostel?: HostelOrderByWithRelationInput
    outpasses?: OutpassOrderByRelationAggregateInput
  }

  export type CareTakerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: CareTakerWhereInput | CareTakerWhereInput[]
    OR?: CareTakerWhereInput[]
    NOT?: CareTakerWhereInput | CareTakerWhereInput[]
    name?: StringFilter<"CareTaker"> | string
    phone?: StringFilter<"CareTaker"> | string
    image?: StringFilter<"CareTaker"> | string
    hostelId?: StringNullableFilter<"CareTaker"> | string | null
    role?: EnumROLEFilter<"CareTaker"> | $Enums.ROLE
    password?: StringFilter<"CareTaker"> | string
    hostel?: XOR<HostelNullableScalarRelationFilter, HostelWhereInput> | null
    outpasses?: OutpassListRelationFilter
  }, "id" | "email">

  export type CareTakerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    hostelId?: SortOrder
    role?: SortOrder
    password?: SortOrder
    _count?: CareTakerCountOrderByAggregateInput
    _max?: CareTakerMaxOrderByAggregateInput
    _min?: CareTakerMinOrderByAggregateInput
  }

  export type CareTakerScalarWhereWithAggregatesInput = {
    AND?: CareTakerScalarWhereWithAggregatesInput | CareTakerScalarWhereWithAggregatesInput[]
    OR?: CareTakerScalarWhereWithAggregatesInput[]
    NOT?: CareTakerScalarWhereWithAggregatesInput | CareTakerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CareTaker"> | string
    name?: StringWithAggregatesFilter<"CareTaker"> | string
    email?: StringWithAggregatesFilter<"CareTaker"> | string
    phone?: StringWithAggregatesFilter<"CareTaker"> | string
    image?: StringWithAggregatesFilter<"CareTaker"> | string
    hostelId?: StringNullableWithAggregatesFilter<"CareTaker"> | string | null
    role?: EnumROLEWithAggregatesFilter<"CareTaker"> | $Enums.ROLE
    password?: StringWithAggregatesFilter<"CareTaker"> | string
  }

  export type HostelWhereInput = {
    AND?: HostelWhereInput | HostelWhereInput[]
    OR?: HostelWhereInput[]
    NOT?: HostelWhereInput | HostelWhereInput[]
    id?: StringFilter<"Hostel"> | string
    name?: StringFilter<"Hostel"> | string
    currentCaretakerId?: StringNullableFilter<"Hostel"> | string | null
    latitude?: FloatFilter<"Hostel"> | number
    longitude?: FloatFilter<"Hostel"> | number
    rooms?: RoomListRelationFilter
    caretakers?: CareTakerListRelationFilter
  }

  export type HostelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    currentCaretakerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    rooms?: RoomOrderByRelationAggregateInput
    caretakers?: CareTakerOrderByRelationAggregateInput
  }

  export type HostelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HostelWhereInput | HostelWhereInput[]
    OR?: HostelWhereInput[]
    NOT?: HostelWhereInput | HostelWhereInput[]
    name?: StringFilter<"Hostel"> | string
    currentCaretakerId?: StringNullableFilter<"Hostel"> | string | null
    latitude?: FloatFilter<"Hostel"> | number
    longitude?: FloatFilter<"Hostel"> | number
    rooms?: RoomListRelationFilter
    caretakers?: CareTakerListRelationFilter
  }, "id">

  export type HostelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    currentCaretakerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: HostelCountOrderByAggregateInput
    _avg?: HostelAvgOrderByAggregateInput
    _max?: HostelMaxOrderByAggregateInput
    _min?: HostelMinOrderByAggregateInput
    _sum?: HostelSumOrderByAggregateInput
  }

  export type HostelScalarWhereWithAggregatesInput = {
    AND?: HostelScalarWhereWithAggregatesInput | HostelScalarWhereWithAggregatesInput[]
    OR?: HostelScalarWhereWithAggregatesInput[]
    NOT?: HostelScalarWhereWithAggregatesInput | HostelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hostel"> | string
    name?: StringWithAggregatesFilter<"Hostel"> | string
    currentCaretakerId?: StringNullableWithAggregatesFilter<"Hostel"> | string | null
    latitude?: FloatWithAggregatesFilter<"Hostel"> | number
    longitude?: FloatWithAggregatesFilter<"Hostel"> | number
  }

  export type RoomWhereInput = {
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    hostelId?: StringFilter<"Room"> | string
    quantity?: IntNullableFilter<"Room"> | number | null
    hostel?: XOR<HostelScalarRelationFilter, HostelWhereInput>
    students?: StudentListRelationFilter
  }

  export type RoomOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    hostelId?: SortOrder
    quantity?: SortOrder
    hostel?: HostelOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type RoomWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_hostelId?: RoomNameHostelIdCompoundUniqueInput
    AND?: RoomWhereInput | RoomWhereInput[]
    OR?: RoomWhereInput[]
    NOT?: RoomWhereInput | RoomWhereInput[]
    name?: StringFilter<"Room"> | string
    hostelId?: StringFilter<"Room"> | string
    quantity?: IntNullableFilter<"Room"> | number | null
    hostel?: XOR<HostelScalarRelationFilter, HostelWhereInput>
    students?: StudentListRelationFilter
  }, "id" | "name_hostelId">

  export type RoomOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    hostelId?: SortOrder
    quantity?: SortOrder
    _count?: RoomCountOrderByAggregateInput
    _avg?: RoomAvgOrderByAggregateInput
    _max?: RoomMaxOrderByAggregateInput
    _min?: RoomMinOrderByAggregateInput
    _sum?: RoomSumOrderByAggregateInput
  }

  export type RoomScalarWhereWithAggregatesInput = {
    AND?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    OR?: RoomScalarWhereWithAggregatesInput[]
    NOT?: RoomScalarWhereWithAggregatesInput | RoomScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Room"> | string
    name?: StringWithAggregatesFilter<"Room"> | string
    hostelId?: StringWithAggregatesFilter<"Room"> | string
    quantity?: IntNullableWithAggregatesFilter<"Room"> | number | null
  }

  export type OutpassWhereInput = {
    AND?: OutpassWhereInput | OutpassWhereInput[]
    OR?: OutpassWhereInput[]
    NOT?: OutpassWhereInput | OutpassWhereInput[]
    id?: StringFilter<"Outpass"> | string
    studentId?: StringFilter<"Outpass"> | string
    from?: DateTimeFilter<"Outpass"> | Date | string
    to?: DateTimeFilter<"Outpass"> | Date | string
    purpose?: StringNullableFilter<"Outpass"> | string | null
    letter?: StringFilter<"Outpass"> | string
    createdAt?: DateTimeFilter<"Outpass"> | Date | string
    caretakerId?: StringNullableFilter<"Outpass"> | string | null
    status?: EnumOUTPASS_STATUSFilter<"Outpass"> | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFilter<"Outpass"> | $Enums.OUTPASS_TYPE
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    caretaker?: XOR<CareTakerNullableScalarRelationFilter, CareTakerWhereInput> | null
  }

  export type OutpassOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    purpose?: SortOrder
    letter?: SortOrder
    createdAt?: SortOrder
    caretakerId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    student?: StudentOrderByWithRelationInput
    caretaker?: CareTakerOrderByWithRelationInput
  }

  export type OutpassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OutpassWhereInput | OutpassWhereInput[]
    OR?: OutpassWhereInput[]
    NOT?: OutpassWhereInput | OutpassWhereInput[]
    studentId?: StringFilter<"Outpass"> | string
    from?: DateTimeFilter<"Outpass"> | Date | string
    to?: DateTimeFilter<"Outpass"> | Date | string
    purpose?: StringNullableFilter<"Outpass"> | string | null
    letter?: StringFilter<"Outpass"> | string
    createdAt?: DateTimeFilter<"Outpass"> | Date | string
    caretakerId?: StringNullableFilter<"Outpass"> | string | null
    status?: EnumOUTPASS_STATUSFilter<"Outpass"> | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFilter<"Outpass"> | $Enums.OUTPASS_TYPE
    student?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    caretaker?: XOR<CareTakerNullableScalarRelationFilter, CareTakerWhereInput> | null
  }, "id">

  export type OutpassOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    purpose?: SortOrder
    letter?: SortOrder
    createdAt?: SortOrder
    caretakerId?: SortOrder
    status?: SortOrder
    type?: SortOrder
    _count?: OutpassCountOrderByAggregateInput
    _max?: OutpassMaxOrderByAggregateInput
    _min?: OutpassMinOrderByAggregateInput
  }

  export type OutpassScalarWhereWithAggregatesInput = {
    AND?: OutpassScalarWhereWithAggregatesInput | OutpassScalarWhereWithAggregatesInput[]
    OR?: OutpassScalarWhereWithAggregatesInput[]
    NOT?: OutpassScalarWhereWithAggregatesInput | OutpassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Outpass"> | string
    studentId?: StringWithAggregatesFilter<"Outpass"> | string
    from?: DateTimeWithAggregatesFilter<"Outpass"> | Date | string
    to?: DateTimeWithAggregatesFilter<"Outpass"> | Date | string
    purpose?: StringNullableWithAggregatesFilter<"Outpass"> | string | null
    letter?: StringWithAggregatesFilter<"Outpass"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Outpass"> | Date | string
    caretakerId?: StringNullableWithAggregatesFilter<"Outpass"> | string | null
    status?: EnumOUTPASS_STATUSWithAggregatesFilter<"Outpass"> | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEWithAggregatesFilter<"Outpass"> | $Enums.OUTPASS_TYPE
  }

  export type StudentCreateInput = {
    id?: string
    name: string
    collegeId: string
    email: string
    phone?: string | null
    address: string
    image?: string
    password: string
    criticalPoints?: number
    out?: boolean
    outType?: $Enums.AttendanceType
    room: RoomCreateNestedOneWithoutStudentsInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutStudentInput
    outpasses?: OutpassCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    name: string
    collegeId: string
    email: string
    phone?: string | null
    address: string
    image?: string
    password: string
    roomId: string
    criticalPoints?: number
    out?: boolean
    outType?: $Enums.AttendanceType
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    outpasses?: OutpassUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    room?: RoomUpdateOneRequiredWithoutStudentsNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutStudentNestedInput
    outpasses?: OutpassUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    outpasses?: OutpassUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    name: string
    collegeId: string
    email: string
    phone?: string | null
    address: string
    image?: string
    password: string
    roomId: string
    criticalPoints?: number
    out?: boolean
    outType?: $Enums.AttendanceType
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
  }

  export type StudentUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
  }

  export type AttendanceCreateInput = {
    id?: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    type: $Enums.AttendanceType
    createdAt?: Date | string
    expectedIn?: Date | string | null
    student: StudentCreateNestedOneWithoutAttendanceRecordsInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    studentId: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    type: $Enums.AttendanceType
    createdAt?: Date | string
    expectedIn?: Date | string | null
  }

  export type AttendanceUpdateInput = {
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    student?: StudentUpdateOneRequiredWithoutAttendanceRecordsNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceCreateManyInput = {
    id?: string
    studentId: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    type: $Enums.AttendanceType
    createdAt?: Date | string
    expectedIn?: Date | string | null
  }

  export type AttendanceUpdateManyMutationInput = {
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CareTakerCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string
    role?: $Enums.ROLE
    password: string
    hostel?: HostelCreateNestedOneWithoutCaretakersInput
    outpasses?: OutpassCreateNestedManyWithoutCaretakerInput
  }

  export type CareTakerUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string
    hostelId?: string | null
    role?: $Enums.ROLE
    password: string
    outpasses?: OutpassUncheckedCreateNestedManyWithoutCaretakerInput
  }

  export type CareTakerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    password?: StringFieldUpdateOperationsInput | string
    hostel?: HostelUpdateOneWithoutCaretakersNestedInput
    outpasses?: OutpassUpdateManyWithoutCaretakerNestedInput
  }

  export type CareTakerUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    hostelId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    password?: StringFieldUpdateOperationsInput | string
    outpasses?: OutpassUncheckedUpdateManyWithoutCaretakerNestedInput
  }

  export type CareTakerCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string
    hostelId?: string | null
    role?: $Enums.ROLE
    password: string
  }

  export type CareTakerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    password?: StringFieldUpdateOperationsInput | string
  }

  export type CareTakerUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    hostelId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    password?: StringFieldUpdateOperationsInput | string
  }

  export type HostelCreateInput = {
    id?: string
    name: string
    currentCaretakerId?: string | null
    latitude: number
    longitude: number
    rooms?: RoomCreateNestedManyWithoutHostelInput
    caretakers?: CareTakerCreateNestedManyWithoutHostelInput
  }

  export type HostelUncheckedCreateInput = {
    id?: string
    name: string
    currentCaretakerId?: string | null
    latitude: number
    longitude: number
    rooms?: RoomUncheckedCreateNestedManyWithoutHostelInput
    caretakers?: CareTakerUncheckedCreateNestedManyWithoutHostelInput
  }

  export type HostelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCaretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUpdateManyWithoutHostelNestedInput
    caretakers?: CareTakerUpdateManyWithoutHostelNestedInput
  }

  export type HostelUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCaretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutHostelNestedInput
    caretakers?: CareTakerUncheckedUpdateManyWithoutHostelNestedInput
  }

  export type HostelCreateManyInput = {
    id?: string
    name: string
    currentCaretakerId?: string | null
    latitude: number
    longitude: number
  }

  export type HostelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCaretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type HostelUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCaretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
  }

  export type RoomCreateInput = {
    id?: string
    name: string
    quantity?: number | null
    hostel: HostelCreateNestedOneWithoutRoomsInput
    students?: StudentCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateInput = {
    id?: string
    name: string
    hostelId: string
    quantity?: number | null
    students?: StudentUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    hostel?: HostelUpdateOneRequiredWithoutRoomsNestedInput
    students?: StudentUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    hostelId?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomCreateManyInput = {
    id?: string
    name: string
    hostelId: string
    quantity?: number | null
  }

  export type RoomUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RoomUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    hostelId?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type OutpassCreateInput = {
    id?: string
    from: Date | string
    to: Date | string
    purpose?: string | null
    letter: string
    createdAt?: Date | string
    status?: $Enums.OUTPASS_STATUS
    type?: $Enums.OUTPASS_TYPE
    student: StudentCreateNestedOneWithoutOutpassesInput
    caretaker?: CareTakerCreateNestedOneWithoutOutpassesInput
  }

  export type OutpassUncheckedCreateInput = {
    id?: string
    studentId: string
    from: Date | string
    to: Date | string
    purpose?: string | null
    letter: string
    createdAt?: Date | string
    caretakerId?: string | null
    status?: $Enums.OUTPASS_STATUS
    type?: $Enums.OUTPASS_TYPE
  }

  export type OutpassUpdateInput = {
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOUTPASS_STATUSFieldUpdateOperationsInput | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFieldUpdateOperationsInput | $Enums.OUTPASS_TYPE
    student?: StudentUpdateOneRequiredWithoutOutpassesNestedInput
    caretaker?: CareTakerUpdateOneWithoutOutpassesNestedInput
  }

  export type OutpassUncheckedUpdateInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOUTPASS_STATUSFieldUpdateOperationsInput | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFieldUpdateOperationsInput | $Enums.OUTPASS_TYPE
  }

  export type OutpassCreateManyInput = {
    id?: string
    studentId: string
    from: Date | string
    to: Date | string
    purpose?: string | null
    letter: string
    createdAt?: Date | string
    caretakerId?: string | null
    status?: $Enums.OUTPASS_STATUS
    type?: $Enums.OUTPASS_TYPE
  }

  export type OutpassUpdateManyMutationInput = {
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOUTPASS_STATUSFieldUpdateOperationsInput | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFieldUpdateOperationsInput | $Enums.OUTPASS_TYPE
  }

  export type OutpassUncheckedUpdateManyInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOUTPASS_STATUSFieldUpdateOperationsInput | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFieldUpdateOperationsInput | $Enums.OUTPASS_TYPE
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumAttendanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeFilter<$PrismaModel> | $Enums.AttendanceType
  }

  export type RoomScalarRelationFilter = {
    is?: RoomWhereInput
    isNot?: RoomWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type OutpassListRelationFilter = {
    every?: OutpassWhereInput
    some?: OutpassWhereInput
    none?: OutpassWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutpassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    password?: SortOrder
    roomId?: SortOrder
    criticalPoints?: SortOrder
    out?: SortOrder
    outType?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    criticalPoints?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    password?: SortOrder
    roomId?: SortOrder
    criticalPoints?: SortOrder
    out?: SortOrder
    outType?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    collegeId?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    image?: SortOrder
    password?: SortOrder
    roomId?: SortOrder
    criticalPoints?: SortOrder
    out?: SortOrder
    outType?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    criticalPoints?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumAttendanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAttendanceTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    expectedIn?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    expectedIn?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    checkInAt?: SortOrder
    checkOutAt?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    expectedIn?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type HostelNullableScalarRelationFilter = {
    is?: HostelWhereInput | null
    isNot?: HostelWhereInput | null
  }

  export type CareTakerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    hostelId?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type CareTakerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    hostelId?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type CareTakerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    image?: SortOrder
    hostelId?: SortOrder
    role?: SortOrder
    password?: SortOrder
  }

  export type EnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RoomListRelationFilter = {
    every?: RoomWhereInput
    some?: RoomWhereInput
    none?: RoomWhereInput
  }

  export type CareTakerListRelationFilter = {
    every?: CareTakerWhereInput
    some?: CareTakerWhereInput
    none?: CareTakerWhereInput
  }

  export type RoomOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CareTakerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HostelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentCaretakerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HostelAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HostelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentCaretakerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HostelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    currentCaretakerId?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type HostelSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type HostelScalarRelationFilter = {
    is?: HostelWhereInput
    isNot?: HostelWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoomNameHostelIdCompoundUniqueInput = {
    name: string
    hostelId: string
  }

  export type RoomCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hostelId?: SortOrder
    quantity?: SortOrder
  }

  export type RoomAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type RoomMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hostelId?: SortOrder
    quantity?: SortOrder
  }

  export type RoomMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    hostelId?: SortOrder
    quantity?: SortOrder
  }

  export type RoomSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumOUTPASS_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.OUTPASS_STATUS | EnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.OUTPASS_STATUS[] | ListEnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.OUTPASS_STATUS[] | ListEnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumOUTPASS_STATUSFilter<$PrismaModel> | $Enums.OUTPASS_STATUS
  }

  export type EnumOUTPASS_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.OUTPASS_TYPE | EnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.OUTPASS_TYPE[] | ListEnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.OUTPASS_TYPE[] | ListEnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumOUTPASS_TYPEFilter<$PrismaModel> | $Enums.OUTPASS_TYPE
  }

  export type CareTakerNullableScalarRelationFilter = {
    is?: CareTakerWhereInput | null
    isNot?: CareTakerWhereInput | null
  }

  export type OutpassCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    purpose?: SortOrder
    letter?: SortOrder
    createdAt?: SortOrder
    caretakerId?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type OutpassMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    purpose?: SortOrder
    letter?: SortOrder
    createdAt?: SortOrder
    caretakerId?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type OutpassMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    from?: SortOrder
    to?: SortOrder
    purpose?: SortOrder
    letter?: SortOrder
    createdAt?: SortOrder
    caretakerId?: SortOrder
    status?: SortOrder
    type?: SortOrder
  }

  export type EnumOUTPASS_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OUTPASS_STATUS | EnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.OUTPASS_STATUS[] | ListEnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.OUTPASS_STATUS[] | ListEnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumOUTPASS_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.OUTPASS_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOUTPASS_STATUSFilter<$PrismaModel>
    _max?: NestedEnumOUTPASS_STATUSFilter<$PrismaModel>
  }

  export type EnumOUTPASS_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OUTPASS_TYPE | EnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.OUTPASS_TYPE[] | ListEnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.OUTPASS_TYPE[] | ListEnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumOUTPASS_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.OUTPASS_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOUTPASS_TYPEFilter<$PrismaModel>
    _max?: NestedEnumOUTPASS_TYPEFilter<$PrismaModel>
  }

  export type RoomCreateNestedOneWithoutStudentsInput = {
    create?: XOR<RoomCreateWithoutStudentsInput, RoomUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutStudentsInput
    connect?: RoomWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type OutpassCreateNestedManyWithoutStudentInput = {
    create?: XOR<OutpassCreateWithoutStudentInput, OutpassUncheckedCreateWithoutStudentInput> | OutpassCreateWithoutStudentInput[] | OutpassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OutpassCreateOrConnectWithoutStudentInput | OutpassCreateOrConnectWithoutStudentInput[]
    createMany?: OutpassCreateManyStudentInputEnvelope
    connect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type OutpassUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<OutpassCreateWithoutStudentInput, OutpassUncheckedCreateWithoutStudentInput> | OutpassCreateWithoutStudentInput[] | OutpassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OutpassCreateOrConnectWithoutStudentInput | OutpassCreateOrConnectWithoutStudentInput[]
    createMany?: OutpassCreateManyStudentInputEnvelope
    connect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumAttendanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.AttendanceType
  }

  export type RoomUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<RoomCreateWithoutStudentsInput, RoomUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: RoomCreateOrConnectWithoutStudentsInput
    upsert?: RoomUpsertWithoutStudentsInput
    connect?: RoomWhereUniqueInput
    update?: XOR<XOR<RoomUpdateToOneWithWhereWithoutStudentsInput, RoomUpdateWithoutStudentsInput>, RoomUncheckedUpdateWithoutStudentsInput>
  }

  export type AttendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type OutpassUpdateManyWithoutStudentNestedInput = {
    create?: XOR<OutpassCreateWithoutStudentInput, OutpassUncheckedCreateWithoutStudentInput> | OutpassCreateWithoutStudentInput[] | OutpassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OutpassCreateOrConnectWithoutStudentInput | OutpassCreateOrConnectWithoutStudentInput[]
    upsert?: OutpassUpsertWithWhereUniqueWithoutStudentInput | OutpassUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: OutpassCreateManyStudentInputEnvelope
    set?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    disconnect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    delete?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    connect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    update?: OutpassUpdateWithWhereUniqueWithoutStudentInput | OutpassUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: OutpassUpdateManyWithWhereWithoutStudentInput | OutpassUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: OutpassScalarWhereInput | OutpassScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput> | AttendanceCreateWithoutStudentInput[] | AttendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutStudentInput | AttendanceCreateOrConnectWithoutStudentInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutStudentInput | AttendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: AttendanceCreateManyStudentInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutStudentInput | AttendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutStudentInput | AttendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type OutpassUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<OutpassCreateWithoutStudentInput, OutpassUncheckedCreateWithoutStudentInput> | OutpassCreateWithoutStudentInput[] | OutpassUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: OutpassCreateOrConnectWithoutStudentInput | OutpassCreateOrConnectWithoutStudentInput[]
    upsert?: OutpassUpsertWithWhereUniqueWithoutStudentInput | OutpassUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: OutpassCreateManyStudentInputEnvelope
    set?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    disconnect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    delete?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    connect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    update?: OutpassUpdateWithWhereUniqueWithoutStudentInput | OutpassUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: OutpassUpdateManyWithWhereWithoutStudentInput | OutpassUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: OutpassScalarWhereInput | OutpassScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAttendanceRecordsInput = {
    create?: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceRecordsInput
    connect?: StudentWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateOneRequiredWithoutAttendanceRecordsNestedInput = {
    create?: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAttendanceRecordsInput
    upsert?: StudentUpsertWithoutAttendanceRecordsInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAttendanceRecordsInput, StudentUpdateWithoutAttendanceRecordsInput>, StudentUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type HostelCreateNestedOneWithoutCaretakersInput = {
    create?: XOR<HostelCreateWithoutCaretakersInput, HostelUncheckedCreateWithoutCaretakersInput>
    connectOrCreate?: HostelCreateOrConnectWithoutCaretakersInput
    connect?: HostelWhereUniqueInput
  }

  export type OutpassCreateNestedManyWithoutCaretakerInput = {
    create?: XOR<OutpassCreateWithoutCaretakerInput, OutpassUncheckedCreateWithoutCaretakerInput> | OutpassCreateWithoutCaretakerInput[] | OutpassUncheckedCreateWithoutCaretakerInput[]
    connectOrCreate?: OutpassCreateOrConnectWithoutCaretakerInput | OutpassCreateOrConnectWithoutCaretakerInput[]
    createMany?: OutpassCreateManyCaretakerInputEnvelope
    connect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
  }

  export type OutpassUncheckedCreateNestedManyWithoutCaretakerInput = {
    create?: XOR<OutpassCreateWithoutCaretakerInput, OutpassUncheckedCreateWithoutCaretakerInput> | OutpassCreateWithoutCaretakerInput[] | OutpassUncheckedCreateWithoutCaretakerInput[]
    connectOrCreate?: OutpassCreateOrConnectWithoutCaretakerInput | OutpassCreateOrConnectWithoutCaretakerInput[]
    createMany?: OutpassCreateManyCaretakerInputEnvelope
    connect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
  }

  export type EnumROLEFieldUpdateOperationsInput = {
    set?: $Enums.ROLE
  }

  export type HostelUpdateOneWithoutCaretakersNestedInput = {
    create?: XOR<HostelCreateWithoutCaretakersInput, HostelUncheckedCreateWithoutCaretakersInput>
    connectOrCreate?: HostelCreateOrConnectWithoutCaretakersInput
    upsert?: HostelUpsertWithoutCaretakersInput
    disconnect?: boolean
    delete?: HostelWhereInput | boolean
    connect?: HostelWhereUniqueInput
    update?: XOR<XOR<HostelUpdateToOneWithWhereWithoutCaretakersInput, HostelUpdateWithoutCaretakersInput>, HostelUncheckedUpdateWithoutCaretakersInput>
  }

  export type OutpassUpdateManyWithoutCaretakerNestedInput = {
    create?: XOR<OutpassCreateWithoutCaretakerInput, OutpassUncheckedCreateWithoutCaretakerInput> | OutpassCreateWithoutCaretakerInput[] | OutpassUncheckedCreateWithoutCaretakerInput[]
    connectOrCreate?: OutpassCreateOrConnectWithoutCaretakerInput | OutpassCreateOrConnectWithoutCaretakerInput[]
    upsert?: OutpassUpsertWithWhereUniqueWithoutCaretakerInput | OutpassUpsertWithWhereUniqueWithoutCaretakerInput[]
    createMany?: OutpassCreateManyCaretakerInputEnvelope
    set?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    disconnect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    delete?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    connect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    update?: OutpassUpdateWithWhereUniqueWithoutCaretakerInput | OutpassUpdateWithWhereUniqueWithoutCaretakerInput[]
    updateMany?: OutpassUpdateManyWithWhereWithoutCaretakerInput | OutpassUpdateManyWithWhereWithoutCaretakerInput[]
    deleteMany?: OutpassScalarWhereInput | OutpassScalarWhereInput[]
  }

  export type OutpassUncheckedUpdateManyWithoutCaretakerNestedInput = {
    create?: XOR<OutpassCreateWithoutCaretakerInput, OutpassUncheckedCreateWithoutCaretakerInput> | OutpassCreateWithoutCaretakerInput[] | OutpassUncheckedCreateWithoutCaretakerInput[]
    connectOrCreate?: OutpassCreateOrConnectWithoutCaretakerInput | OutpassCreateOrConnectWithoutCaretakerInput[]
    upsert?: OutpassUpsertWithWhereUniqueWithoutCaretakerInput | OutpassUpsertWithWhereUniqueWithoutCaretakerInput[]
    createMany?: OutpassCreateManyCaretakerInputEnvelope
    set?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    disconnect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    delete?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    connect?: OutpassWhereUniqueInput | OutpassWhereUniqueInput[]
    update?: OutpassUpdateWithWhereUniqueWithoutCaretakerInput | OutpassUpdateWithWhereUniqueWithoutCaretakerInput[]
    updateMany?: OutpassUpdateManyWithWhereWithoutCaretakerInput | OutpassUpdateManyWithWhereWithoutCaretakerInput[]
    deleteMany?: OutpassScalarWhereInput | OutpassScalarWhereInput[]
  }

  export type RoomCreateNestedManyWithoutHostelInput = {
    create?: XOR<RoomCreateWithoutHostelInput, RoomUncheckedCreateWithoutHostelInput> | RoomCreateWithoutHostelInput[] | RoomUncheckedCreateWithoutHostelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHostelInput | RoomCreateOrConnectWithoutHostelInput[]
    createMany?: RoomCreateManyHostelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type CareTakerCreateNestedManyWithoutHostelInput = {
    create?: XOR<CareTakerCreateWithoutHostelInput, CareTakerUncheckedCreateWithoutHostelInput> | CareTakerCreateWithoutHostelInput[] | CareTakerUncheckedCreateWithoutHostelInput[]
    connectOrCreate?: CareTakerCreateOrConnectWithoutHostelInput | CareTakerCreateOrConnectWithoutHostelInput[]
    createMany?: CareTakerCreateManyHostelInputEnvelope
    connect?: CareTakerWhereUniqueInput | CareTakerWhereUniqueInput[]
  }

  export type RoomUncheckedCreateNestedManyWithoutHostelInput = {
    create?: XOR<RoomCreateWithoutHostelInput, RoomUncheckedCreateWithoutHostelInput> | RoomCreateWithoutHostelInput[] | RoomUncheckedCreateWithoutHostelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHostelInput | RoomCreateOrConnectWithoutHostelInput[]
    createMany?: RoomCreateManyHostelInputEnvelope
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
  }

  export type CareTakerUncheckedCreateNestedManyWithoutHostelInput = {
    create?: XOR<CareTakerCreateWithoutHostelInput, CareTakerUncheckedCreateWithoutHostelInput> | CareTakerCreateWithoutHostelInput[] | CareTakerUncheckedCreateWithoutHostelInput[]
    connectOrCreate?: CareTakerCreateOrConnectWithoutHostelInput | CareTakerCreateOrConnectWithoutHostelInput[]
    createMany?: CareTakerCreateManyHostelInputEnvelope
    connect?: CareTakerWhereUniqueInput | CareTakerWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoomUpdateManyWithoutHostelNestedInput = {
    create?: XOR<RoomCreateWithoutHostelInput, RoomUncheckedCreateWithoutHostelInput> | RoomCreateWithoutHostelInput[] | RoomUncheckedCreateWithoutHostelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHostelInput | RoomCreateOrConnectWithoutHostelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHostelInput | RoomUpsertWithWhereUniqueWithoutHostelInput[]
    createMany?: RoomCreateManyHostelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHostelInput | RoomUpdateWithWhereUniqueWithoutHostelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHostelInput | RoomUpdateManyWithWhereWithoutHostelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type CareTakerUpdateManyWithoutHostelNestedInput = {
    create?: XOR<CareTakerCreateWithoutHostelInput, CareTakerUncheckedCreateWithoutHostelInput> | CareTakerCreateWithoutHostelInput[] | CareTakerUncheckedCreateWithoutHostelInput[]
    connectOrCreate?: CareTakerCreateOrConnectWithoutHostelInput | CareTakerCreateOrConnectWithoutHostelInput[]
    upsert?: CareTakerUpsertWithWhereUniqueWithoutHostelInput | CareTakerUpsertWithWhereUniqueWithoutHostelInput[]
    createMany?: CareTakerCreateManyHostelInputEnvelope
    set?: CareTakerWhereUniqueInput | CareTakerWhereUniqueInput[]
    disconnect?: CareTakerWhereUniqueInput | CareTakerWhereUniqueInput[]
    delete?: CareTakerWhereUniqueInput | CareTakerWhereUniqueInput[]
    connect?: CareTakerWhereUniqueInput | CareTakerWhereUniqueInput[]
    update?: CareTakerUpdateWithWhereUniqueWithoutHostelInput | CareTakerUpdateWithWhereUniqueWithoutHostelInput[]
    updateMany?: CareTakerUpdateManyWithWhereWithoutHostelInput | CareTakerUpdateManyWithWhereWithoutHostelInput[]
    deleteMany?: CareTakerScalarWhereInput | CareTakerScalarWhereInput[]
  }

  export type RoomUncheckedUpdateManyWithoutHostelNestedInput = {
    create?: XOR<RoomCreateWithoutHostelInput, RoomUncheckedCreateWithoutHostelInput> | RoomCreateWithoutHostelInput[] | RoomUncheckedCreateWithoutHostelInput[]
    connectOrCreate?: RoomCreateOrConnectWithoutHostelInput | RoomCreateOrConnectWithoutHostelInput[]
    upsert?: RoomUpsertWithWhereUniqueWithoutHostelInput | RoomUpsertWithWhereUniqueWithoutHostelInput[]
    createMany?: RoomCreateManyHostelInputEnvelope
    set?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    disconnect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    delete?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    connect?: RoomWhereUniqueInput | RoomWhereUniqueInput[]
    update?: RoomUpdateWithWhereUniqueWithoutHostelInput | RoomUpdateWithWhereUniqueWithoutHostelInput[]
    updateMany?: RoomUpdateManyWithWhereWithoutHostelInput | RoomUpdateManyWithWhereWithoutHostelInput[]
    deleteMany?: RoomScalarWhereInput | RoomScalarWhereInput[]
  }

  export type CareTakerUncheckedUpdateManyWithoutHostelNestedInput = {
    create?: XOR<CareTakerCreateWithoutHostelInput, CareTakerUncheckedCreateWithoutHostelInput> | CareTakerCreateWithoutHostelInput[] | CareTakerUncheckedCreateWithoutHostelInput[]
    connectOrCreate?: CareTakerCreateOrConnectWithoutHostelInput | CareTakerCreateOrConnectWithoutHostelInput[]
    upsert?: CareTakerUpsertWithWhereUniqueWithoutHostelInput | CareTakerUpsertWithWhereUniqueWithoutHostelInput[]
    createMany?: CareTakerCreateManyHostelInputEnvelope
    set?: CareTakerWhereUniqueInput | CareTakerWhereUniqueInput[]
    disconnect?: CareTakerWhereUniqueInput | CareTakerWhereUniqueInput[]
    delete?: CareTakerWhereUniqueInput | CareTakerWhereUniqueInput[]
    connect?: CareTakerWhereUniqueInput | CareTakerWhereUniqueInput[]
    update?: CareTakerUpdateWithWhereUniqueWithoutHostelInput | CareTakerUpdateWithWhereUniqueWithoutHostelInput[]
    updateMany?: CareTakerUpdateManyWithWhereWithoutHostelInput | CareTakerUpdateManyWithWhereWithoutHostelInput[]
    deleteMany?: CareTakerScalarWhereInput | CareTakerScalarWhereInput[]
  }

  export type HostelCreateNestedOneWithoutRoomsInput = {
    create?: XOR<HostelCreateWithoutRoomsInput, HostelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HostelCreateOrConnectWithoutRoomsInput
    connect?: HostelWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutRoomInput = {
    create?: XOR<StudentCreateWithoutRoomInput, StudentUncheckedCreateWithoutRoomInput> | StudentCreateWithoutRoomInput[] | StudentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRoomInput | StudentCreateOrConnectWithoutRoomInput[]
    createMany?: StudentCreateManyRoomInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutRoomInput = {
    create?: XOR<StudentCreateWithoutRoomInput, StudentUncheckedCreateWithoutRoomInput> | StudentCreateWithoutRoomInput[] | StudentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRoomInput | StudentCreateOrConnectWithoutRoomInput[]
    createMany?: StudentCreateManyRoomInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type HostelUpdateOneRequiredWithoutRoomsNestedInput = {
    create?: XOR<HostelCreateWithoutRoomsInput, HostelUncheckedCreateWithoutRoomsInput>
    connectOrCreate?: HostelCreateOrConnectWithoutRoomsInput
    upsert?: HostelUpsertWithoutRoomsInput
    connect?: HostelWhereUniqueInput
    update?: XOR<XOR<HostelUpdateToOneWithWhereWithoutRoomsInput, HostelUpdateWithoutRoomsInput>, HostelUncheckedUpdateWithoutRoomsInput>
  }

  export type StudentUpdateManyWithoutRoomNestedInput = {
    create?: XOR<StudentCreateWithoutRoomInput, StudentUncheckedCreateWithoutRoomInput> | StudentCreateWithoutRoomInput[] | StudentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRoomInput | StudentCreateOrConnectWithoutRoomInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutRoomInput | StudentUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: StudentCreateManyRoomInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutRoomInput | StudentUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutRoomInput | StudentUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutRoomNestedInput = {
    create?: XOR<StudentCreateWithoutRoomInput, StudentUncheckedCreateWithoutRoomInput> | StudentCreateWithoutRoomInput[] | StudentUncheckedCreateWithoutRoomInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutRoomInput | StudentCreateOrConnectWithoutRoomInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutRoomInput | StudentUpsertWithWhereUniqueWithoutRoomInput[]
    createMany?: StudentCreateManyRoomInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutRoomInput | StudentUpdateWithWhereUniqueWithoutRoomInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutRoomInput | StudentUpdateManyWithWhereWithoutRoomInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutOutpassesInput = {
    create?: XOR<StudentCreateWithoutOutpassesInput, StudentUncheckedCreateWithoutOutpassesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutOutpassesInput
    connect?: StudentWhereUniqueInput
  }

  export type CareTakerCreateNestedOneWithoutOutpassesInput = {
    create?: XOR<CareTakerCreateWithoutOutpassesInput, CareTakerUncheckedCreateWithoutOutpassesInput>
    connectOrCreate?: CareTakerCreateOrConnectWithoutOutpassesInput
    connect?: CareTakerWhereUniqueInput
  }

  export type EnumOUTPASS_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.OUTPASS_STATUS
  }

  export type EnumOUTPASS_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.OUTPASS_TYPE
  }

  export type StudentUpdateOneRequiredWithoutOutpassesNestedInput = {
    create?: XOR<StudentCreateWithoutOutpassesInput, StudentUncheckedCreateWithoutOutpassesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutOutpassesInput
    upsert?: StudentUpsertWithoutOutpassesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutOutpassesInput, StudentUpdateWithoutOutpassesInput>, StudentUncheckedUpdateWithoutOutpassesInput>
  }

  export type CareTakerUpdateOneWithoutOutpassesNestedInput = {
    create?: XOR<CareTakerCreateWithoutOutpassesInput, CareTakerUncheckedCreateWithoutOutpassesInput>
    connectOrCreate?: CareTakerCreateOrConnectWithoutOutpassesInput
    upsert?: CareTakerUpsertWithoutOutpassesInput
    disconnect?: boolean
    delete?: CareTakerWhereInput | boolean
    connect?: CareTakerWhereUniqueInput
    update?: XOR<XOR<CareTakerUpdateToOneWithWhereWithoutOutpassesInput, CareTakerUpdateWithoutOutpassesInput>, CareTakerUncheckedUpdateWithoutOutpassesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumAttendanceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeFilter<$PrismaModel> | $Enums.AttendanceType
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AttendanceType | EnumAttendanceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AttendanceType[] | ListEnumAttendanceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAttendanceTypeWithAggregatesFilter<$PrismaModel> | $Enums.AttendanceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAttendanceTypeFilter<$PrismaModel>
    _max?: NestedEnumAttendanceTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEFilter<$PrismaModel> | $Enums.ROLE
  }

  export type NestedEnumROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ROLE | EnumROLEFieldRefInput<$PrismaModel>
    in?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.ROLE[] | ListEnumROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumROLEWithAggregatesFilter<$PrismaModel> | $Enums.ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumROLEFilter<$PrismaModel>
    _max?: NestedEnumROLEFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumOUTPASS_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.OUTPASS_STATUS | EnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.OUTPASS_STATUS[] | ListEnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.OUTPASS_STATUS[] | ListEnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumOUTPASS_STATUSFilter<$PrismaModel> | $Enums.OUTPASS_STATUS
  }

  export type NestedEnumOUTPASS_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.OUTPASS_TYPE | EnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.OUTPASS_TYPE[] | ListEnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.OUTPASS_TYPE[] | ListEnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumOUTPASS_TYPEFilter<$PrismaModel> | $Enums.OUTPASS_TYPE
  }

  export type NestedEnumOUTPASS_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OUTPASS_STATUS | EnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.OUTPASS_STATUS[] | ListEnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.OUTPASS_STATUS[] | ListEnumOUTPASS_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumOUTPASS_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.OUTPASS_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOUTPASS_STATUSFilter<$PrismaModel>
    _max?: NestedEnumOUTPASS_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumOUTPASS_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OUTPASS_TYPE | EnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.OUTPASS_TYPE[] | ListEnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.OUTPASS_TYPE[] | ListEnumOUTPASS_TYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumOUTPASS_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.OUTPASS_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOUTPASS_TYPEFilter<$PrismaModel>
    _max?: NestedEnumOUTPASS_TYPEFilter<$PrismaModel>
  }

  export type RoomCreateWithoutStudentsInput = {
    id?: string
    name: string
    quantity?: number | null
    hostel: HostelCreateNestedOneWithoutRoomsInput
  }

  export type RoomUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    hostelId: string
    quantity?: number | null
  }

  export type RoomCreateOrConnectWithoutStudentsInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutStudentsInput, RoomUncheckedCreateWithoutStudentsInput>
  }

  export type AttendanceCreateWithoutStudentInput = {
    id?: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    type: $Enums.AttendanceType
    createdAt?: Date | string
    expectedIn?: Date | string | null
  }

  export type AttendanceUncheckedCreateWithoutStudentInput = {
    id?: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    type: $Enums.AttendanceType
    createdAt?: Date | string
    expectedIn?: Date | string | null
  }

  export type AttendanceCreateOrConnectWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceCreateManyStudentInputEnvelope = {
    data: AttendanceCreateManyStudentInput | AttendanceCreateManyStudentInput[]
  }

  export type OutpassCreateWithoutStudentInput = {
    id?: string
    from: Date | string
    to: Date | string
    purpose?: string | null
    letter: string
    createdAt?: Date | string
    status?: $Enums.OUTPASS_STATUS
    type?: $Enums.OUTPASS_TYPE
    caretaker?: CareTakerCreateNestedOneWithoutOutpassesInput
  }

  export type OutpassUncheckedCreateWithoutStudentInput = {
    id?: string
    from: Date | string
    to: Date | string
    purpose?: string | null
    letter: string
    createdAt?: Date | string
    caretakerId?: string | null
    status?: $Enums.OUTPASS_STATUS
    type?: $Enums.OUTPASS_TYPE
  }

  export type OutpassCreateOrConnectWithoutStudentInput = {
    where: OutpassWhereUniqueInput
    create: XOR<OutpassCreateWithoutStudentInput, OutpassUncheckedCreateWithoutStudentInput>
  }

  export type OutpassCreateManyStudentInputEnvelope = {
    data: OutpassCreateManyStudentInput | OutpassCreateManyStudentInput[]
  }

  export type RoomUpsertWithoutStudentsInput = {
    update: XOR<RoomUpdateWithoutStudentsInput, RoomUncheckedUpdateWithoutStudentsInput>
    create: XOR<RoomCreateWithoutStudentsInput, RoomUncheckedCreateWithoutStudentsInput>
    where?: RoomWhereInput
  }

  export type RoomUpdateToOneWithWhereWithoutStudentsInput = {
    where?: RoomWhereInput
    data: XOR<RoomUpdateWithoutStudentsInput, RoomUncheckedUpdateWithoutStudentsInput>
  }

  export type RoomUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    hostel?: HostelUpdateOneRequiredWithoutRoomsNestedInput
  }

  export type RoomUncheckedUpdateWithoutStudentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    hostelId?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AttendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<AttendanceCreateWithoutStudentInput, AttendanceUncheckedCreateWithoutStudentInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutStudentInput, AttendanceUncheckedUpdateWithoutStudentInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutStudentInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    studentId?: StringFilter<"Attendance"> | string
    checkInAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOutAt?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    type?: EnumAttendanceTypeFilter<"Attendance"> | $Enums.AttendanceType
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    expectedIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
  }

  export type OutpassUpsertWithWhereUniqueWithoutStudentInput = {
    where: OutpassWhereUniqueInput
    update: XOR<OutpassUpdateWithoutStudentInput, OutpassUncheckedUpdateWithoutStudentInput>
    create: XOR<OutpassCreateWithoutStudentInput, OutpassUncheckedCreateWithoutStudentInput>
  }

  export type OutpassUpdateWithWhereUniqueWithoutStudentInput = {
    where: OutpassWhereUniqueInput
    data: XOR<OutpassUpdateWithoutStudentInput, OutpassUncheckedUpdateWithoutStudentInput>
  }

  export type OutpassUpdateManyWithWhereWithoutStudentInput = {
    where: OutpassScalarWhereInput
    data: XOR<OutpassUpdateManyMutationInput, OutpassUncheckedUpdateManyWithoutStudentInput>
  }

  export type OutpassScalarWhereInput = {
    AND?: OutpassScalarWhereInput | OutpassScalarWhereInput[]
    OR?: OutpassScalarWhereInput[]
    NOT?: OutpassScalarWhereInput | OutpassScalarWhereInput[]
    id?: StringFilter<"Outpass"> | string
    studentId?: StringFilter<"Outpass"> | string
    from?: DateTimeFilter<"Outpass"> | Date | string
    to?: DateTimeFilter<"Outpass"> | Date | string
    purpose?: StringNullableFilter<"Outpass"> | string | null
    letter?: StringFilter<"Outpass"> | string
    createdAt?: DateTimeFilter<"Outpass"> | Date | string
    caretakerId?: StringNullableFilter<"Outpass"> | string | null
    status?: EnumOUTPASS_STATUSFilter<"Outpass"> | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFilter<"Outpass"> | $Enums.OUTPASS_TYPE
  }

  export type StudentCreateWithoutAttendanceRecordsInput = {
    id?: string
    name: string
    collegeId: string
    email: string
    phone?: string | null
    address: string
    image?: string
    password: string
    criticalPoints?: number
    out?: boolean
    outType?: $Enums.AttendanceType
    room: RoomCreateNestedOneWithoutStudentsInput
    outpasses?: OutpassCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutAttendanceRecordsInput = {
    id?: string
    name: string
    collegeId: string
    email: string
    phone?: string | null
    address: string
    image?: string
    password: string
    roomId: string
    criticalPoints?: number
    out?: boolean
    outType?: $Enums.AttendanceType
    outpasses?: OutpassUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutAttendanceRecordsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
  }

  export type StudentUpsertWithoutAttendanceRecordsInput = {
    update: XOR<StudentUpdateWithoutAttendanceRecordsInput, StudentUncheckedUpdateWithoutAttendanceRecordsInput>
    create: XOR<StudentCreateWithoutAttendanceRecordsInput, StudentUncheckedCreateWithoutAttendanceRecordsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAttendanceRecordsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAttendanceRecordsInput, StudentUncheckedUpdateWithoutAttendanceRecordsInput>
  }

  export type StudentUpdateWithoutAttendanceRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    room?: RoomUpdateOneRequiredWithoutStudentsNestedInput
    outpasses?: OutpassUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutAttendanceRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    outpasses?: OutpassUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type HostelCreateWithoutCaretakersInput = {
    id?: string
    name: string
    currentCaretakerId?: string | null
    latitude: number
    longitude: number
    rooms?: RoomCreateNestedManyWithoutHostelInput
  }

  export type HostelUncheckedCreateWithoutCaretakersInput = {
    id?: string
    name: string
    currentCaretakerId?: string | null
    latitude: number
    longitude: number
    rooms?: RoomUncheckedCreateNestedManyWithoutHostelInput
  }

  export type HostelCreateOrConnectWithoutCaretakersInput = {
    where: HostelWhereUniqueInput
    create: XOR<HostelCreateWithoutCaretakersInput, HostelUncheckedCreateWithoutCaretakersInput>
  }

  export type OutpassCreateWithoutCaretakerInput = {
    id?: string
    from: Date | string
    to: Date | string
    purpose?: string | null
    letter: string
    createdAt?: Date | string
    status?: $Enums.OUTPASS_STATUS
    type?: $Enums.OUTPASS_TYPE
    student: StudentCreateNestedOneWithoutOutpassesInput
  }

  export type OutpassUncheckedCreateWithoutCaretakerInput = {
    id?: string
    studentId: string
    from: Date | string
    to: Date | string
    purpose?: string | null
    letter: string
    createdAt?: Date | string
    status?: $Enums.OUTPASS_STATUS
    type?: $Enums.OUTPASS_TYPE
  }

  export type OutpassCreateOrConnectWithoutCaretakerInput = {
    where: OutpassWhereUniqueInput
    create: XOR<OutpassCreateWithoutCaretakerInput, OutpassUncheckedCreateWithoutCaretakerInput>
  }

  export type OutpassCreateManyCaretakerInputEnvelope = {
    data: OutpassCreateManyCaretakerInput | OutpassCreateManyCaretakerInput[]
  }

  export type HostelUpsertWithoutCaretakersInput = {
    update: XOR<HostelUpdateWithoutCaretakersInput, HostelUncheckedUpdateWithoutCaretakersInput>
    create: XOR<HostelCreateWithoutCaretakersInput, HostelUncheckedCreateWithoutCaretakersInput>
    where?: HostelWhereInput
  }

  export type HostelUpdateToOneWithWhereWithoutCaretakersInput = {
    where?: HostelWhereInput
    data: XOR<HostelUpdateWithoutCaretakersInput, HostelUncheckedUpdateWithoutCaretakersInput>
  }

  export type HostelUpdateWithoutCaretakersInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCaretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUpdateManyWithoutHostelNestedInput
  }

  export type HostelUncheckedUpdateWithoutCaretakersInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCaretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    rooms?: RoomUncheckedUpdateManyWithoutHostelNestedInput
  }

  export type OutpassUpsertWithWhereUniqueWithoutCaretakerInput = {
    where: OutpassWhereUniqueInput
    update: XOR<OutpassUpdateWithoutCaretakerInput, OutpassUncheckedUpdateWithoutCaretakerInput>
    create: XOR<OutpassCreateWithoutCaretakerInput, OutpassUncheckedCreateWithoutCaretakerInput>
  }

  export type OutpassUpdateWithWhereUniqueWithoutCaretakerInput = {
    where: OutpassWhereUniqueInput
    data: XOR<OutpassUpdateWithoutCaretakerInput, OutpassUncheckedUpdateWithoutCaretakerInput>
  }

  export type OutpassUpdateManyWithWhereWithoutCaretakerInput = {
    where: OutpassScalarWhereInput
    data: XOR<OutpassUpdateManyMutationInput, OutpassUncheckedUpdateManyWithoutCaretakerInput>
  }

  export type RoomCreateWithoutHostelInput = {
    id?: string
    name: string
    quantity?: number | null
    students?: StudentCreateNestedManyWithoutRoomInput
  }

  export type RoomUncheckedCreateWithoutHostelInput = {
    id?: string
    name: string
    quantity?: number | null
    students?: StudentUncheckedCreateNestedManyWithoutRoomInput
  }

  export type RoomCreateOrConnectWithoutHostelInput = {
    where: RoomWhereUniqueInput
    create: XOR<RoomCreateWithoutHostelInput, RoomUncheckedCreateWithoutHostelInput>
  }

  export type RoomCreateManyHostelInputEnvelope = {
    data: RoomCreateManyHostelInput | RoomCreateManyHostelInput[]
  }

  export type CareTakerCreateWithoutHostelInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string
    role?: $Enums.ROLE
    password: string
    outpasses?: OutpassCreateNestedManyWithoutCaretakerInput
  }

  export type CareTakerUncheckedCreateWithoutHostelInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string
    role?: $Enums.ROLE
    password: string
    outpasses?: OutpassUncheckedCreateNestedManyWithoutCaretakerInput
  }

  export type CareTakerCreateOrConnectWithoutHostelInput = {
    where: CareTakerWhereUniqueInput
    create: XOR<CareTakerCreateWithoutHostelInput, CareTakerUncheckedCreateWithoutHostelInput>
  }

  export type CareTakerCreateManyHostelInputEnvelope = {
    data: CareTakerCreateManyHostelInput | CareTakerCreateManyHostelInput[]
  }

  export type RoomUpsertWithWhereUniqueWithoutHostelInput = {
    where: RoomWhereUniqueInput
    update: XOR<RoomUpdateWithoutHostelInput, RoomUncheckedUpdateWithoutHostelInput>
    create: XOR<RoomCreateWithoutHostelInput, RoomUncheckedCreateWithoutHostelInput>
  }

  export type RoomUpdateWithWhereUniqueWithoutHostelInput = {
    where: RoomWhereUniqueInput
    data: XOR<RoomUpdateWithoutHostelInput, RoomUncheckedUpdateWithoutHostelInput>
  }

  export type RoomUpdateManyWithWhereWithoutHostelInput = {
    where: RoomScalarWhereInput
    data: XOR<RoomUpdateManyMutationInput, RoomUncheckedUpdateManyWithoutHostelInput>
  }

  export type RoomScalarWhereInput = {
    AND?: RoomScalarWhereInput | RoomScalarWhereInput[]
    OR?: RoomScalarWhereInput[]
    NOT?: RoomScalarWhereInput | RoomScalarWhereInput[]
    id?: StringFilter<"Room"> | string
    name?: StringFilter<"Room"> | string
    hostelId?: StringFilter<"Room"> | string
    quantity?: IntNullableFilter<"Room"> | number | null
  }

  export type CareTakerUpsertWithWhereUniqueWithoutHostelInput = {
    where: CareTakerWhereUniqueInput
    update: XOR<CareTakerUpdateWithoutHostelInput, CareTakerUncheckedUpdateWithoutHostelInput>
    create: XOR<CareTakerCreateWithoutHostelInput, CareTakerUncheckedCreateWithoutHostelInput>
  }

  export type CareTakerUpdateWithWhereUniqueWithoutHostelInput = {
    where: CareTakerWhereUniqueInput
    data: XOR<CareTakerUpdateWithoutHostelInput, CareTakerUncheckedUpdateWithoutHostelInput>
  }

  export type CareTakerUpdateManyWithWhereWithoutHostelInput = {
    where: CareTakerScalarWhereInput
    data: XOR<CareTakerUpdateManyMutationInput, CareTakerUncheckedUpdateManyWithoutHostelInput>
  }

  export type CareTakerScalarWhereInput = {
    AND?: CareTakerScalarWhereInput | CareTakerScalarWhereInput[]
    OR?: CareTakerScalarWhereInput[]
    NOT?: CareTakerScalarWhereInput | CareTakerScalarWhereInput[]
    id?: StringFilter<"CareTaker"> | string
    name?: StringFilter<"CareTaker"> | string
    email?: StringFilter<"CareTaker"> | string
    phone?: StringFilter<"CareTaker"> | string
    image?: StringFilter<"CareTaker"> | string
    hostelId?: StringNullableFilter<"CareTaker"> | string | null
    role?: EnumROLEFilter<"CareTaker"> | $Enums.ROLE
    password?: StringFilter<"CareTaker"> | string
  }

  export type HostelCreateWithoutRoomsInput = {
    id?: string
    name: string
    currentCaretakerId?: string | null
    latitude: number
    longitude: number
    caretakers?: CareTakerCreateNestedManyWithoutHostelInput
  }

  export type HostelUncheckedCreateWithoutRoomsInput = {
    id?: string
    name: string
    currentCaretakerId?: string | null
    latitude: number
    longitude: number
    caretakers?: CareTakerUncheckedCreateNestedManyWithoutHostelInput
  }

  export type HostelCreateOrConnectWithoutRoomsInput = {
    where: HostelWhereUniqueInput
    create: XOR<HostelCreateWithoutRoomsInput, HostelUncheckedCreateWithoutRoomsInput>
  }

  export type StudentCreateWithoutRoomInput = {
    id?: string
    name: string
    collegeId: string
    email: string
    phone?: string | null
    address: string
    image?: string
    password: string
    criticalPoints?: number
    out?: boolean
    outType?: $Enums.AttendanceType
    attendanceRecords?: AttendanceCreateNestedManyWithoutStudentInput
    outpasses?: OutpassCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutRoomInput = {
    id?: string
    name: string
    collegeId: string
    email: string
    phone?: string | null
    address: string
    image?: string
    password: string
    criticalPoints?: number
    out?: boolean
    outType?: $Enums.AttendanceType
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
    outpasses?: OutpassUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutRoomInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutRoomInput, StudentUncheckedCreateWithoutRoomInput>
  }

  export type StudentCreateManyRoomInputEnvelope = {
    data: StudentCreateManyRoomInput | StudentCreateManyRoomInput[]
  }

  export type HostelUpsertWithoutRoomsInput = {
    update: XOR<HostelUpdateWithoutRoomsInput, HostelUncheckedUpdateWithoutRoomsInput>
    create: XOR<HostelCreateWithoutRoomsInput, HostelUncheckedCreateWithoutRoomsInput>
    where?: HostelWhereInput
  }

  export type HostelUpdateToOneWithWhereWithoutRoomsInput = {
    where?: HostelWhereInput
    data: XOR<HostelUpdateWithoutRoomsInput, HostelUncheckedUpdateWithoutRoomsInput>
  }

  export type HostelUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCaretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    caretakers?: CareTakerUpdateManyWithoutHostelNestedInput
  }

  export type HostelUncheckedUpdateWithoutRoomsInput = {
    name?: StringFieldUpdateOperationsInput | string
    currentCaretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: FloatFieldUpdateOperationsInput | number
    longitude?: FloatFieldUpdateOperationsInput | number
    caretakers?: CareTakerUncheckedUpdateManyWithoutHostelNestedInput
  }

  export type StudentUpsertWithWhereUniqueWithoutRoomInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutRoomInput, StudentUncheckedUpdateWithoutRoomInput>
    create: XOR<StudentCreateWithoutRoomInput, StudentUncheckedCreateWithoutRoomInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutRoomInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutRoomInput, StudentUncheckedUpdateWithoutRoomInput>
  }

  export type StudentUpdateManyWithWhereWithoutRoomInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutRoomInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    name?: StringFilter<"Student"> | string
    collegeId?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    phone?: StringNullableFilter<"Student"> | string | null
    address?: StringFilter<"Student"> | string
    image?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    roomId?: StringFilter<"Student"> | string
    criticalPoints?: IntFilter<"Student"> | number
    out?: BoolFilter<"Student"> | boolean
    outType?: EnumAttendanceTypeFilter<"Student"> | $Enums.AttendanceType
  }

  export type StudentCreateWithoutOutpassesInput = {
    id?: string
    name: string
    collegeId: string
    email: string
    phone?: string | null
    address: string
    image?: string
    password: string
    criticalPoints?: number
    out?: boolean
    outType?: $Enums.AttendanceType
    room: RoomCreateNestedOneWithoutStudentsInput
    attendanceRecords?: AttendanceCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutOutpassesInput = {
    id?: string
    name: string
    collegeId: string
    email: string
    phone?: string | null
    address: string
    image?: string
    password: string
    roomId: string
    criticalPoints?: number
    out?: boolean
    outType?: $Enums.AttendanceType
    attendanceRecords?: AttendanceUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutOutpassesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutOutpassesInput, StudentUncheckedCreateWithoutOutpassesInput>
  }

  export type CareTakerCreateWithoutOutpassesInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string
    role?: $Enums.ROLE
    password: string
    hostel?: HostelCreateNestedOneWithoutCaretakersInput
  }

  export type CareTakerUncheckedCreateWithoutOutpassesInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string
    hostelId?: string | null
    role?: $Enums.ROLE
    password: string
  }

  export type CareTakerCreateOrConnectWithoutOutpassesInput = {
    where: CareTakerWhereUniqueInput
    create: XOR<CareTakerCreateWithoutOutpassesInput, CareTakerUncheckedCreateWithoutOutpassesInput>
  }

  export type StudentUpsertWithoutOutpassesInput = {
    update: XOR<StudentUpdateWithoutOutpassesInput, StudentUncheckedUpdateWithoutOutpassesInput>
    create: XOR<StudentCreateWithoutOutpassesInput, StudentUncheckedCreateWithoutOutpassesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutOutpassesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutOutpassesInput, StudentUncheckedUpdateWithoutOutpassesInput>
  }

  export type StudentUpdateWithoutOutpassesInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    room?: RoomUpdateOneRequiredWithoutStudentsNestedInput
    attendanceRecords?: AttendanceUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutOutpassesInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    roomId?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type CareTakerUpsertWithoutOutpassesInput = {
    update: XOR<CareTakerUpdateWithoutOutpassesInput, CareTakerUncheckedUpdateWithoutOutpassesInput>
    create: XOR<CareTakerCreateWithoutOutpassesInput, CareTakerUncheckedCreateWithoutOutpassesInput>
    where?: CareTakerWhereInput
  }

  export type CareTakerUpdateToOneWithWhereWithoutOutpassesInput = {
    where?: CareTakerWhereInput
    data: XOR<CareTakerUpdateWithoutOutpassesInput, CareTakerUncheckedUpdateWithoutOutpassesInput>
  }

  export type CareTakerUpdateWithoutOutpassesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    password?: StringFieldUpdateOperationsInput | string
    hostel?: HostelUpdateOneWithoutCaretakersNestedInput
  }

  export type CareTakerUncheckedUpdateWithoutOutpassesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    hostelId?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceCreateManyStudentInput = {
    id?: string
    checkInAt?: Date | string | null
    checkOutAt?: Date | string | null
    type: $Enums.AttendanceType
    createdAt?: Date | string
    expectedIn?: Date | string | null
  }

  export type OutpassCreateManyStudentInput = {
    id?: string
    from: Date | string
    to: Date | string
    purpose?: string | null
    letter: string
    createdAt?: Date | string
    caretakerId?: string | null
    status?: $Enums.OUTPASS_STATUS
    type?: $Enums.OUTPASS_TYPE
  }

  export type AttendanceUpdateWithoutStudentInput = {
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateWithoutStudentInput = {
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUncheckedUpdateManyWithoutStudentInput = {
    checkInAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOutAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    type?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OutpassUpdateWithoutStudentInput = {
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOUTPASS_STATUSFieldUpdateOperationsInput | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFieldUpdateOperationsInput | $Enums.OUTPASS_TYPE
    caretaker?: CareTakerUpdateOneWithoutOutpassesNestedInput
  }

  export type OutpassUncheckedUpdateWithoutStudentInput = {
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOUTPASS_STATUSFieldUpdateOperationsInput | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFieldUpdateOperationsInput | $Enums.OUTPASS_TYPE
  }

  export type OutpassUncheckedUpdateManyWithoutStudentInput = {
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    caretakerId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumOUTPASS_STATUSFieldUpdateOperationsInput | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFieldUpdateOperationsInput | $Enums.OUTPASS_TYPE
  }

  export type OutpassCreateManyCaretakerInput = {
    id?: string
    studentId: string
    from: Date | string
    to: Date | string
    purpose?: string | null
    letter: string
    createdAt?: Date | string
    status?: $Enums.OUTPASS_STATUS
    type?: $Enums.OUTPASS_TYPE
  }

  export type OutpassUpdateWithoutCaretakerInput = {
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOUTPASS_STATUSFieldUpdateOperationsInput | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFieldUpdateOperationsInput | $Enums.OUTPASS_TYPE
    student?: StudentUpdateOneRequiredWithoutOutpassesNestedInput
  }

  export type OutpassUncheckedUpdateWithoutCaretakerInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOUTPASS_STATUSFieldUpdateOperationsInput | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFieldUpdateOperationsInput | $Enums.OUTPASS_TYPE
  }

  export type OutpassUncheckedUpdateManyWithoutCaretakerInput = {
    studentId?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    purpose?: NullableStringFieldUpdateOperationsInput | string | null
    letter?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumOUTPASS_STATUSFieldUpdateOperationsInput | $Enums.OUTPASS_STATUS
    type?: EnumOUTPASS_TYPEFieldUpdateOperationsInput | $Enums.OUTPASS_TYPE
  }

  export type RoomCreateManyHostelInput = {
    id?: string
    name: string
    quantity?: number | null
  }

  export type CareTakerCreateManyHostelInput = {
    id?: string
    name: string
    email: string
    phone: string
    image?: string
    role?: $Enums.ROLE
    password: string
  }

  export type RoomUpdateWithoutHostelInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateWithoutHostelInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    students?: StudentUncheckedUpdateManyWithoutRoomNestedInput
  }

  export type RoomUncheckedUpdateManyWithoutHostelInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CareTakerUpdateWithoutHostelInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    password?: StringFieldUpdateOperationsInput | string
    outpasses?: OutpassUpdateManyWithoutCaretakerNestedInput
  }

  export type CareTakerUncheckedUpdateWithoutHostelInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    password?: StringFieldUpdateOperationsInput | string
    outpasses?: OutpassUncheckedUpdateManyWithoutCaretakerNestedInput
  }

  export type CareTakerUncheckedUpdateManyWithoutHostelInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: EnumROLEFieldUpdateOperationsInput | $Enums.ROLE
    password?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateManyRoomInput = {
    id?: string
    name: string
    collegeId: string
    email: string
    phone?: string | null
    address: string
    image?: string
    password: string
    criticalPoints?: number
    out?: boolean
    outType?: $Enums.AttendanceType
  }

  export type StudentUpdateWithoutRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    attendanceRecords?: AttendanceUpdateManyWithoutStudentNestedInput
    outpasses?: OutpassUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
    attendanceRecords?: AttendanceUncheckedUpdateManyWithoutStudentNestedInput
    outpasses?: OutpassUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutRoomInput = {
    name?: StringFieldUpdateOperationsInput | string
    collegeId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    criticalPoints?: IntFieldUpdateOperationsInput | number
    out?: BoolFieldUpdateOperationsInput | boolean
    outType?: EnumAttendanceTypeFieldUpdateOperationsInput | $Enums.AttendanceType
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}