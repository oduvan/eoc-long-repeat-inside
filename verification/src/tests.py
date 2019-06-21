"""
TESTS is a dict with all you tests.
Keys for this will be categories' names.
Each test is dict with
    "input" -- input data for user function
    "answer" -- your right answer
    "explanation" -- not necessary key, it's using for additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": "aaaaa",
            "answer": 'aaaaa'
        },
        {
            "input": "aabbff",
            "answer": 'aa'
        },
        {
            "input": "aababcc",
            "answer": 'abab'
        },
        {
            "input": "abc",
            "answer": ''
        },
        {
            "input": "abcabcabab",
            "answer": 'abcabc'
        }
    ],
    "Extra": [
        {
            "input": "ccccc",
            "answer": 'ccccc'
        },
        {
            "input": "rtafafafaf",
            "answer": 'afafafaf'
        },
        {
            "input": "rghtyjdfrtdfdf56r",
            "answer": 'dfdf'
        },
        {
            "input": "",
            "answer": ''
        }
    ]
}
