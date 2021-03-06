declare namespace Bokeh {
  export const ImageSource: { new(attributes?: IImageSource, options?: ModelOpts): ImageSource };
  export interface ImageSource extends Model, IImageSource {}
  export interface IImageSource extends IModel {
    url?: string;
    extra_url_vars?: Map<string>;
  }
}
