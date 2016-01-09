/** @jsx dom */

import dom from '../src/index';
import { assert } from 'chai';

describe('dom-builder', function () {
  it('should create an element node', function () {
      const actual = dom('div');
      const expected = {
        nodeType: 1
      };

      assert.strictEqual(actual.nodeType, expected.nodeType);
  });

  it('should escape text content', function () {
      const actual = dom('div', null, '<script>alert("oh no!");</script>');

      assert.strictEqual(actual.children.length, 0);
      assert.strictEqual(actual.childNodes.length, 1);
      assert.strictEqual(actual.childNodes[0].nodeType, 3);
  });

  it('should create DOM trees', function () {
    const user = {
        firstName: 'Bob',
        lastName: 'Hill'
    };

    const el = dom('div', null,
      dom('img.profile', { src: 'avatar.png' }),
      dom('h3', null, [user.firstName, user.lastName].join(' '))
    );

    const actual = dom('div', null, el).innerHTML;
    const expected = '<div class=""><img class="profile" src="avatar.png"><h3 class="">Bob Hill</h3></div>';

    assert.strictEqual(actual, expected);
  });

  it('should create DOM trees when using JSX syntax', function () {
    const user = {
        firstName: 'Bob',
        lastName: 'Hill'
    };

    const el = <div>
      <img className="profile" src="avatar.png" />
      <h3>{[user.firstName, user.lastName].join(' ')}</h3>
    </div>;

    const actual = dom('div', null, el).innerHTML;
    const expected = '<div class=""><img class="profile" src="avatar.png"><h3 class="">Bob Hill</h3></div>';

    assert.strictEqual(actual, expected);
  });
});
