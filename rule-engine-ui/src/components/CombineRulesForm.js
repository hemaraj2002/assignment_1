import React, { useState } from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001';
import "../components//CombineRulesForm.css"
const CombineRule = () => {
  const [ruleIds, setRuleIds] = useState('');
  const [combinedRule, setCombinedRule] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post(`${BASE_URL}/api/rules/combine`, {
        ruleIds: ruleIds.split(',').map(id => id.trim()),
      });
      setCombinedRule(response.data.combinedRule);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const parseRule = (node) => {
    if (!node) return '';

    if (node.type === 'operator') {
      const left = parseRule(node.left);
      const right = parseRule(node.right);
      return `(${left} ${node.value} ${right})`;
    } else if (node.type === 'operand') {
      return `${node.value.field} ${node.value.operator} ${node.value.value}`;
    }
    return '';
  };

  const generateSummary = (ast) => {
    return parseRule(ast);
  };

  return (
    <div>
      <h2>Combine Rules</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rule IDs (comma-separated):</label>
          <input 
            type="text" 
            value={ruleIds} 
            onChange={(e) => setRuleIds(e.target.value)} 
          />
        </div>
        <button type="submit">Combine Rules</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {combinedRule && (
        <div>
          <h3>Combined Rule Information</h3>
          <div>
            <strong>Combined Rule Name:</strong> {combinedRule.name}
          </div>
          <div>
            <strong>Logical Structure:</strong> 
            <div style={{ whiteSpace: 'pre-wrap', maxHeight: '200px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px' }}>
              {generateSummary(combinedRule.ast)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CombineRule;
