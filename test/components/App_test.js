// Sample test pattern. It will not work for now.

import { renderComponent, expect } from '../test_helper';
import SampleApp from '../../src/components/sample_app';

describe('App', () => {

    it('has the correct className', () => {
        const SampleAppInstance = renderComponent(SampleApp);
        expect(SampleAppInstance).to.have.class('1-app');
    });

    it('has the correct className', () => {
        const component = renderComponent(SampleApp);
        expect(component).to.contain('React starter');
    });

});
