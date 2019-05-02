import testFun from '../../code/array/test2.js'

test('23', () => {
    expect(testFun("23")).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
})
test('234', () => {
    expect(testFun('234')).toEqual([
        'adg', 'adh', 'adi',
        'aeg', 'aeh', 'aei',
        'afg', 'afh', 'afi',
        'bdg', 'bdh', 'bdi',
        'beg', 'beh', 'bei',
        'bfg', 'bfh', 'bfi',
        'cdg', 'cdh', 'cdi',
        'ceg', 'ceh', 'cei',
        'cfg', 'cfh', 'cfi'
    ])
})
