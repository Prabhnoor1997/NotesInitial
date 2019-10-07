import { MyMaterialModule } from './material.module';

describe('MaterialModule', () => {
  let materialModule: MyMaterialModule;

  beforeEach(() => {
    materialModule = new MyMaterialModule();
  });

  it('should create an instance', () => {
    expect(materialModule).toBeTruthy();
  });
});
