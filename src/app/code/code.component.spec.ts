import {CodeComponent} from './code.component';
   
   describe('CodeComponent', () => {
    beforeEach(function() {
      this.code = new CodeComponent();
    });
   
    it('user should be undefined', function() {
      expect(this.code.user).toBeUndefined();
    });
   });